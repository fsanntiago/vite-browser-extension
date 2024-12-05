;(async function toggleCamera() {
  chrome.runtime.onMessage.addListener((request) => {
    const cameraId = 'rusty-camera'
    const camera = document.getElementById(cameraId)

    if (request.action === 'toggleCamera') {
      const cameraElement = document.createElement('iframe')
      if (camera) {
        camera.remove()
      } else {
        cameraElement.id = cameraId
        cameraElement.setAttribute(
          'style',
          `
          all:initial;
          position: fixed;
        top: 0;
        right: 0;
        z-index: 9999;
        width: 200px;
        height: 200px;
        background-color: red;
        border-radius: 50%;
        border: none;`,
        )

        // Set permission on iframe - camera and microphone
        cameraElement.setAttribute('allow', 'camera; microphone')

        cameraElement.src = chrome.runtime.getURL('camera.html')
        cameraElement.classList.add('crx')
        document.body.appendChild(cameraElement)
      }
    }
  })
})()
;(async function enableCamera() {
  const cameraElement = document.querySelector('#camera')

  console.log('camera element', cameraElement)
})()
