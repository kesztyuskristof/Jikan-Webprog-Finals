let animeCounter = 0;

async function getAnime()
{
    const baseUrl = "https://api.jikan.moe/v4/anime";

    const input = document.getElementById("character_name");
    const animeName = input.value;

    if (animeName.trim() === "") return;

    input.value = "";


    const url = `${baseUrl}?q=${animeName}&limit=1`;

    const res = await fetch(url);
    const data = await res.json();

    const anime = data.data[0];

    if (!anime)
    {
        alert("Anime not found!");
        return;
    }


    let mainTable = null;
    const mainContainer = document.getElementById("container");
    let tbody = null;

    if (animeCounter === 0)
    {
        mainTable = document.createElement("table");
        mainTable.id = "animeTable";

        mainContainer.appendChild(mainTable);

        const thead = document.createElement("thead");
        tbody = document.createElement("tbody");

        mainTable.appendChild(thead);
        mainTable.appendChild(tbody);
    }
    
    else
    {
        mainTable = document.getElementById("animeTable");
        tbody = mainTable.tBodies[0];
    }
}