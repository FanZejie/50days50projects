const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']


sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  
  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSounds()
      document.getElementById(sound).play()    // 播放音频
  })

  document.getElementById('buttons').appendChild(btn)
})


function stopSounds(){
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause()  
    song.currentTime = 0
  })
}