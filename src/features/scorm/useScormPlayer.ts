import { ref } from 'vue'
import JSZip from 'jszip'

export function useScormPlayer() {
  const selectedFile = ref<File | null>(null)
  const readyToView = ref(false)
  const isLoading = ref(false)
  const errorMessage = ref<string | undefined>(undefined)

  const handleDrop = (e: DragEvent) => {
    const files = e.dataTransfer?.files
    if (files && files.length > 0) {
      selectedFile.value = files[0]
      readyToView.value = true
      errorMessage.value = undefined
    }
  }

  const handleFileChange = (e: Event) => {
    const input = e.target as HTMLInputElement
    const file = input.files?.[0]
    if (file) {
      selectedFile.value = file
      readyToView.value = true
      errorMessage.value = undefined
    }
  }

  const visualizarScorm = async () => {
    if (!selectedFile.value) return

    try {
      isLoading.value = true
      const zip = await JSZip.loadAsync(selectedFile.value)
      const indexFile = zip.file('index.html')

      if (!indexFile) {
        errorMessage.value = '❌ No se encontró index.html en el ZIP'
        isLoading.value = false
        return
      }

      const html = await indexFile.async('string')
      const cleanedHtml = html.replace(/target="_blank"/g, 'target="_self"')

      const withLmsScript = cleanedHtml.replace('<head>', `<head><script src="/lms.js"></script>`)

      const blob = new Blob([withLmsScript], { type: 'text/html' })
      const url = URL.createObjectURL(blob)

      const scormWindow = window.open(
        url,
        '_blank',
        'width=1024,height=768,toolbar=no,menubar=no,scrollbars=yes,resizable=yes'
      )

      if (!scormWindow) {
        errorMessage.value = '❌ El navegador bloqueó la ventana emergente. Activa los popups.'
      }
    } catch (err) {
      console.error('Error al cargar SCORM:', err)
      errorMessage.value = '❌ Error al cargar el paquete SCORM'
    } finally {
      isLoading.value = false
    }
  }

  return {
    handleDrop,
    handleFileChange,
    visualizarScorm,
    selectedFile,
    readyToView,
    isLoading,
    errorMessage
  }
}
