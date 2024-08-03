import './DevTools.css'

export const DevTools = () => {
  const link =
    'https://github.com/nandanito/browser-extension-template-bun-vite-react'

  return (
    <main>
      <h3>DevTools Page</h3>
      <a href={link} target="_blank" rel="noreferrer">
        generated by browser-extension-template-bun-vite-react
      </a>
    </main>
  )
}

export default DevTools
