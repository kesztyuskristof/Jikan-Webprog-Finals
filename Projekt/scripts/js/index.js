let animeCounter = 0;

async function getAnime()
{
    const baseUrl = "https://api.jikan.moe/v4/anime";

    const input = document.getElementById("character_name");
    const animeName = input.value;

    if (animeName.trim() === "") return;

    input.value = "";
}