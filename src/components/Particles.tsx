import { ReactElement, useCallback } from 'react'
import ParticlesImported from 'react-particles'
import type { Engine, IOptions, RecursivePartial } from 'tsparticles-engine'
import { loadStarsPreset } from 'tsparticles-preset-stars'

export function Particles(): ReactElement {
  // Functions
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    await loadStarsPreset(engine)
  }, [])

  // Constants
  const options: RecursivePartial<IOptions> = {
    preset: 'stars',
    particles: {
      move: {
        speed: 1,
      },
      number: {
        value: 300,
      },
      size: {
        value: 1,
      },
    },
  }

  return (
    <ParticlesImported
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  )
}
