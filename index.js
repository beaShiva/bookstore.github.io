 searchForm = document.querySelector(".search-form");

 document.querySelector("#search-btn").onclick = ()=>{
    searchForm.classList.toggle("active");
 }


 let loginForm = document.querySelector(".login-form-container");
  document.querySelector("#login-btn").onclick = () =>{
      loginForm.classList.toggle("active");
  }
  document.querySelector(".login-form-container").onclick = () =>{
    loginForm.classList.remove("active");
  }

 window.onscroll = ()=>{
    searchForm.classList.toggle("active");
  if(window.scrollY>80) {
    document.querySelector(".header .header-2").classList.add("active");
  }else{
    document.querySelector(".header .header-2").classList.remove("active");
  }
}

window.onload = ()=>{
    if(window.scrollY>80) {
      document.querySelector(".header .header-2").classList.add("active");
    }else{
      document.querySelector(".header .header-2").classList.remove("active");
    }
    fadeOut();
  }
  function loader(){
    document.querySelector(".loder-container").classList.add("active");
  }
  function fadeOut(){
    setTimeout(loader,4000);
  }
  var swiper = new Swiper(".book-slider", {
  loop:true,
  centeredSlides:true,
  autoplay:{
      delay:9500,
      disableOnInteravtion:false
  }
    ,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
   
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteravtion:false
    },navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
      ,
      breakpoints: {
        0: {
          slidesPerView: 1,
          
        },
        450: {
          slidesPerView: 2,
     
        },
        768: {
          slidesPerView: 3,
     
        },
        1024: {
          slidesPerView: 4,
          
        },
      },
    });
    var swiper = new Swiper(".arrival-slider", {
      loop:true,
      centeredSlides:true,
      autoplay:{
          delay:9500,
          disableOnInteravtion:false
      }
        ,
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
         
          768: {
            slidesPerView: 2,
       
          },
          1024: {
            slidesPerView: 3,
            
          },
        },
      });
      var swiper = new Swiper(".review-slider", {
        loop:true,
        centeredSlides:true,
        autoplay:{
            delay:9500,
            disableOnInteravtion:false
        }
          ,
          breakpoints: {
            0: {
              slidesPerView: 1,
              
            },
           
            768: {
              slidesPerView: 2,
         
            },
            1024: {
              slidesPerView: 3,
              
            },
          },
        });
        var swiper = new Swiper(".blog-slider", {
          loop:true,
          centeredSlides:true,
          autoplay:{
              delay:9500,
              disableOnInteravtion:false
          }
            ,
            breakpoints: {
              0: {
                slidesPerView: 1,
                
              },
             
              768: {
                slidesPerView: 2,
           
              },
              1024: {
                slidesPerView: 3,
                
              },
            },
          });