
let cached: {cmd: string, params: any[] }[] = []

const gen = (cmd: string) => (...params: any[]) => {
  if (!window || !window.analytics) {
    cached.push({
      cmd,
      params,
    })
    return
  }

  //
  try {
    // Library has now loaded
    if (cached.length > 0) {
      cached.forEach(({ cmd, params }) => {
        if (!window.analytics[cmd]) return
        window.analytics[cmd](...params)
      })
      cached = []
    }
    return !window.analytics[cmd](...params)
  } catch (e) {}
}

export default {
  track: gen('track'),
  identify: gen('identify'),
  page: gen('page'),
}
