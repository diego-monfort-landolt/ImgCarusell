name = prompt('Your Name: ');
alert('Welcome' + name);


(() => {
    //img for the slider
        const images_list = [
    {
        "url": "assets/cod.jpg",
        "alt": "",
        "name": "image 1",
        "link": ""
    },
    {
        "url": "assets/bg1.jpg",
        "alt": "",
        "name": "image 2",
        "link": ""
    },
    {
        "url": "assets/netflix1.jpg",
        "alt": "",
        "name": "image 3",
        "link": ""
    },
    {
        "url": "assets/bg1.jpg",
        "alt": "",
        "name": "image 4",
        "link": ""
    },
    {
        "url": "assets/netflix2.jpg",
        "alt": "",
        "name": "image 5",
        "link": ""
    }
        ];


        let slider_id = document.querySelector("#hcg-slider-1");
    
        // append all images
        let dots_div = "";
        let images_div = "";
        for (let i = 0; i < images_list.length; i++) {
            // if no link without href="" tag
            let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
            images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:flex"':'')+'>'+
                            '<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
                         '</a>';
        }
        slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
        let slide_index = 0;
    
        const images = slider_id.querySelectorAll(".hcg-slides");
        const showSlides = () => {
            if (slide_index > images.length-1) {
                slide_index = 0;
            }
            if (slide_index < 0) {
                slide_index = images.length-1;
            }
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none";
                if (i == slide_index) {
                    images[i].style.display = "flex";
                }
            }
        }
    
        // auto play
        setInterval(() => {
            slide_index++;
            showSlides();
        }, 5000);
    
    })();