var gitHubUser = window.prompt('Qual seu usuário no GitHub?')

const linksSocialMedia = {
    github: gitHubUser,
    youtube: gitHubUser,
    facebook: gitHubUser,
    instagram: gitHubUser,
    twitter: gitHubUser
}

function changeSocialMedia() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }    
}

changeSocialMedia()

function getGithubProfileInfo() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        title.textContent = `${data.name} | Do While 2021`
        userName.textContent = data.name
        userId.textContent = data.name
        gitUrl.href = data.html_url
        location.textContent = data.location
        bio.textContent = data.bio
        profileImg.src = data.avatar_url

    })
}

getGithubProfileInfo()