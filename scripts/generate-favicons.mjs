import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'
import pngToIco from 'png-to-ico'

const repoRoot = process.cwd()
const publicDir = path.join(repoRoot, 'public')

const sourceSvgPath = path.join(publicDir, 'favicon.svg')

const outputs = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
]

async function main() {
  const svg = await fs.readFile(sourceSvgPath)

  await Promise.all(
    outputs.map(async ({ name, size }) => {
      const outPath = path.join(publicDir, name)
      await sharp(svg, { density: 512 })
        .resize(size, size, { fit: 'cover' })
        .png()
        .toFile(outPath)
    })
  )

  const png32 = await fs.readFile(path.join(publicDir, 'favicon-32x32.png'))
  const png16 = await fs.readFile(path.join(publicDir, 'favicon-16x16.png'))
  const ico = await pngToIco([png32, png16])
  await fs.writeFile(path.join(publicDir, 'favicon.ico'), ico)

  // eslint-disable-next-line no-console
  console.log('Favicons generated in public/.')
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exitCode = 1
})

