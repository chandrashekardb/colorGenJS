const generateBtnEl=document.getElementById("generateBtn")

const singleHexColorGenerator=()=>{
    const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
    let hexColor="#";
    for(let i=0; i<6; i++){
        let random=Math.floor(Math.random()*hex.length);
        hexColor +=hex[random];
    }
    return hexColor;
}

const colorPaletteGeneraotr=()=>{
    const colorPalett=[];
    for(let i=0; i<4; i++){
        colorPalett.push(singleHexColorGenerator())
    }
    return colorPalett;
}

const renderColorPalette=()=>{
    const colorContainer=document.querySelector(".colours_container");
    colorContainer.innerHTML="";
    const colorPalette=colorPaletteGeneraotr();

    colorPalette.forEach((color, i)=>{
        const colorDiv=document.createElement("div");
        colorDiv.id=`color${i+1}`;
        colorDiv.style.background=color;
        colorDiv.className="colorBox";

        const colorTag=document.createElement("p")
        colorTag.id=`color${i + 1}`;
        colorTag.className="colorTag";
        colorTag.innerHTML=color;

        colorDiv.appendChild(colorTag);
        colorContainer.appendChild(colorDiv);
    })

    const copytoClipBoard=(id)=>{
        const el=document.getElementById(id);
        console.log(el);

        navigator.clipboard.writeText(el).then(()=>{
            alert("Copied to clipboard")
        }).catch((err)=>{
            alert("Could not copy",err)
        })
    }

    const colorTags=document.querySelectorAll(".colorTag");
    colorTags.forEach((colorTag, i)=>{
        colorTag.addEventListener("click", ()=>
            copytoClipBoard(`color${i + 1}Tag`)
        )
    })
};
renderColorPalette();
generateBtnEl.addEventListener("click", renderColorPalette);