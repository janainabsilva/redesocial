const container = document.querySelector('.container')
window.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()

    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(({users})=>{
        users.forEach(user =>{
            fetch('https://dummyjson.com/posts/'+user.id)
           .then(res => res.json())
           .then((posts)=>{
            fetch('https://jsonplaceholder.typicode.com/photos/'+user.id)
            .then(res => res.json())
            .then((photo)=>{
                const postagem = `<div class="card">
                <div class="insta-card">
                        <img src="${user.image}" alt="">
                        <p>${user.name}</p>
                        <img class="title-icon" src="pontinhos.png" alt="">
                    </div>
                        <img class="insta-img" src="${photo.url}" alt="">
                    <div class="like-item"> 
                        <div>
                        <img class="reacoes" src="coracao.png" alt="">
                        <img class="reacoes" src="bate-papo.png" alt="">
                        <img class="reacoes" src="mandar.png" alt="">
                        </div>
                        <div>
                        <img class="reacoes" src="salve-.png" alt="">
                        </div>´                                                                                                                                                                                            <p>${posts.body}</p>                                                                                                                                                    </div>`
                        container.innerHTML += postagem 
                        
            })
           })
        })
    })
})
   
