let textprofile = document.getElementById("textprofile");

onrun = (run, fps)=>{
    window.onload = ()=>{
        setInterval(run, 1000 / fps)
    }
}

random = (max, min)=>{
    return Math.random() * max + min
}

updateprofile = ()=>{
    textprofile.innerHTML = `<p style="color: rgba(${random(255,1)},${random(255,1)},${random(255,1)},255);">Profile</p>`
}

let a1onclick = () => {
    let number="number: 0825781902\n"
    let fb="FB: Dutch Cpuy\n"
    let yt="Youtube: curious person"
    alert(number+fb+yt)
}

onrun(updateprofile,15)