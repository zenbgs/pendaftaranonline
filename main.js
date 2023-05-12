/**
* Template Name: FlexStart - v1.1.1
* Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header');
  var konz = document.getElementById('logoBerubah');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
        konz.innerHTML = "<img src='assets/img/loggo.png'>";
        // select('.mobile-nav-toggle').style.color = '#000';
      } else {
        selectHeader.classList.remove('header-scrolled')
      konz.innerHTML = "<img src='assets/img/logoputih.png'>";
      // select('.mobile-nav-toggle').style.color = '#fff';
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  // Menghilangkan footer mobile device

  const mediaQuery = window.matchMedia('(max-width: 600px)');
  if(mediaQuery.matches){
    select('#footerAtas').classList.add('sembunyi');
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  const cekDeviceMobel = window.matchMedia('(max-width: 600px)');
  const cekDeviceDesktop = window.matchMedia('(min-width: 1025px)');
  if (cekDeviceMobel.matches) {
    select('#zenNavbar').classList.add('dropdown-active')
}

if (cekDeviceDesktop.matches) {
  select('.zenMobel').classList.add('sembunyi');
}



on('click', '.plus', function(e) {
  // Stop acting like a button
  e.preventDefault();
  // Get the field name
  let globalTotalHarga = sessionStorage.getItem('zentoStorage');
  // console.log(globalTotalHarga)
  var quantity = parseInt(select('#quantity').value);
  var jumlah_pesan = select('#jumlah_pesan');
  let total_harga = select('#total_harga');
  let harga_satuan = select('#harga_satuan').value;
  let harga = select('#id_harga');
  // let kondisiAdaLocal;

  // If is not undefined

      let increment = select('#quantity').value = quantity + 1;
      let setJumlahPesan = jumlah_pesan.innerHTML = quantity + 1 + "kg";
      let ambilValueJumlahPesan = setJumlahPesan.replace(/\D/g, "");
      let perhitunganAwal =  increment * harga_satuan;
      // console.log(perhitunganAwal)
      // let total_harga_proses =  parseInt(globalTotalHarga) + parseInt(perhitunganAwal);
      // console.log(perhitunganAwal)
      sessionStorage.setItem('zentoStorage',perhitunganAwal)
      if(localStorage.getItem('zentoStorage')){
        let kondisiAdaLocal = parseInt(localStorage.getItem('zentoStorage')) + parseInt(sessionStorage.getItem('zentoStorage'));
        sessionStorage.setItem('zentoStorage',kondisiAdaLocal)
        total_harga.innerHTML = "Rp " + kondisiAdaLocal;
        harga.innerHTML = "Rp " + perhitunganAwal
       
      }

     if(localStorage.getItem('zentoStorage3') != null){
        let kondisiAdaLocal2 = parseInt(sessionStorage.getItem('zentoStorage')) + parseInt(localStorage.getItem('zentoStorage3'));
        sessionStorage.setItem('zentoStorage',kondisiAdaLocal2)
        total_harga.innerHTML = "Rp " + kondisiAdaLocal2;
        harga.innerHTML = "Rp " + perhitunganAwal
        }

      if(localStorage.getItem('zentoStorage3') === null && localStorage.getItem('zentoStorage') === null){
        total_harga.innerHTML = "Rp " + perhitunganAwal;
        harga.innerHTML = "Rp " + perhitunganAwal;
      }

      //  if(localStorage.getItem('zentoStorage3') != null){
      //   let kondisiAdaLocal2 = parseInt(sessionStorage.getItem('zentoStorage')) + parseInt(localStorage.getItem('zentoStorage3'));
      //   sessionStorage.setItem('zentoStorage',kondisiAdaLocal2)
      //   total_harga.innerHTML = "Rp " + kondisiAdaLocal2;
      //   harga.innerHTML = "Rp " + perhitunganAwal
      // }
      // if(localStorage.getItem('zentoStorage3') != true){
      //   total_harga.innerHTML = "Rp " + perhitunganAwal
      //   harga.innerHTML = "Rp " + perhitunganAwal
      // }
      
      // if(localStorage.getItem('zen') != null){
      // let tambah = parseInt(total_harga_proses) + parseInt(localStorage.getItem('zen'));
      //  kondisiAdaLocal = total_harga.innerHTML = "Rp " + tambah;
      //  localStorage.removeItem('zen');
      // //  total_harga.innerHTML = "Rp " + kondisiAdaLocal;
      // }else{
      //   total_harga.innerHTML = "Rp " + total_harga_proses;
      // }

      

      // Increment


}, true)

on('click', '.minus', function(e) {

   e.preventDefault();

   var quantity = parseInt(select('#quantity').value);
   var jumlah_pesan = select('#jumlah_pesan');
   let total_harga = select('#total_harga');
   let harga_satuan = select('#harga_satuan').value;
   let harga = select('#id_harga');
   
   let zentoStorage = sessionStorage.getItem('zentoStorage');

       if(quantity>10){
      let decrement = select('#quantity').value = quantity - 1;
       jumlah_pesan.innerHTML = quantity - 1 + "kg";
       let proses_total = harga_satuan * decrement;
      //  console.log(proses_total)
       sessionStorage.setItem('zentoStorage',proses_total)
       if(localStorage.getItem('zentoStorage') != null){
         let kondisiAdaLocal = parseInt(sessionStorage.getItem('zentoStorage')) + parseInt(localStorage.getItem('zentoStorage'));
         sessionStorage.setItem('zentoStorage',kondisiAdaLocal)
         total_harga.innerHTML = "Rp " + kondisiAdaLocal;
        //  console.log(kondisiAdaLocal)
         harga.innerHTML = "Rp " + proses_total
         
       }

       if(localStorage.getItem('zentoStorage3') != null){
        let kondisiAdaLocal2 = parseInt(sessionStorage.getItem('zentoStorage')) + parseInt(localStorage.getItem('zentoStorage3'));
        sessionStorage.setItem('zentoStorage',kondisiAdaLocal2)
        total_harga.innerHTML = "Rp " + kondisiAdaLocal2;
        harga.innerHTML = "Rp " + proses_total
       }
       if(localStorage.getItem('zentoStorage3') === null && localStorage.getItem('zentoStorage') === null){
        total_harga.innerHTML = "Rp " + proses_total;
        harga.innerHTML = "Rp " + proses_total;
       }

      //  if(localStorage.getItem('zentoStorage3') != null){
      //   let kondisiAdaLocal2 = parseInt(sessionStorage.getItem('zentoStorage')) + parseInt(localStorage.getItem('zentoStorage3'));
      //   sessionStorage.setItem('zentoStorage',kondisiAdaLocal2)
      //   total_harga.innerHTML = "Rp " + kondisiAdaLocal2;
      //   harga.innerHTML = "Rp " + proses_total
      // }

      // if(localStorage.getItem('zentoStorage3') != true){
      //  total_harga.innerHTML = "Rp " + proses_total;
      //  harga.innerHTML = "Rp " + proses_total;
      // }
   
       }

}, true)

on('click', '.pengemasan', function(e) {

  //  e.preventDefault();
  //  document.getElementById('radio1').checked= true;
   let pengemasan = document.querySelectorAll('input[name="pengemasan"]');
   let total_harga = sessionStorage.getItem('zentoStorage');
  //  let zentoStorage = sessionStorage.getItem('zentoStorage');
  let kemasan = select('#id_kemasan');
  let nama_kemasan = select('#nama_kemasan');
  let kemasan_ambil = select('.triggerKemasan');
   let proses;
   let tmp = localStorage.getItem('zentoStorage');
   let selectedValue, prosesdua;
   for (let rb of pengemasan) {
   if (rb.checked) {
    let idRadio = this.getAttribute('id');
    // document.querySelector("label[for = '"+idRadio+"']").style.color = 'green'
   selectedValue = rb.value
   nama_kemasan.innerHTML = document.querySelector("label[for = '"+idRadio+"']").textContent
   rb.checked = true;
   kemasan.innerHTML = "Rp " + selectedValue
   break;
   }
   }

  //  alert(localStorage.getItem('zen'))
   if(tmp != null){
    //  console.log(total_harga)
    //  console.log(tmp)
     proses = parseInt(total_harga) - parseInt(tmp);
    //  console.log(proses)
     prosesdua = proses + parseInt(selectedValue);
     localStorage.setItem('zentoStorage',selectedValue)
     sessionStorage.setItem('zentoStorage',prosesdua)
     select('#total_harga').innerHTML = "Rp " + prosesdua;
     
   }
   else if(selectedValue == tmp){
    //  console.log("bener")
     return false
   }
   else{
     proses =  parseInt(total_harga) + parseInt(selectedValue);
    //  localStorage.setItem('zen',selectedValue);
    localStorage.setItem('zentoStorage',selectedValue);
     sessionStorage.setItem('zentoStorage',proses)
     select('#total_harga').innerHTML = "Rp " + proses;
   }


}, true)

on('click', '.roasted', function(e) {

  // e.preventDefault();
  let roasted = document.querySelectorAll('input[name="roasted"]');
  let total_harga = sessionStorage.getItem('zentoStorage');
  let inputSukonz = select('#inputSukonz').value;
 //  let zentoStorage = sessionStorage.getItem('zentoStorage');
 let harga_layanan = select('#id_layanan');
   let proses, prosesAwal;
  let tmp = localStorage.getItem('zentoStorage2');
  let tmp1 = localStorage.getItem('zentoStorage3');
  let selectedValue, prosesdua;
  for (let rb of roasted) {
  if (rb.checked) {
   let idRadio = this.getAttribute('id');
  selectedValue = rb.value
  select('#statusRoasted').innerHTML = document.querySelector("label[for = '"+idRadio+"']").textContent
  select('#statusRoasted').style.color = '#2D1E71'
  // rb.checked = true;
  let tampilHarga = selectedValue * inputSukonz;
  harga_layanan.innerHTML = "Rp " + tampilHarga
  let btnProses = select('#btnProses');
  btnProses.style.background = '#FF2D12';
  btnProses.style.opacity = '';
  break;
  }
  }

 //  alert(localStorage.getItem('zen'))
  if(tmp != null){

    if(inputSukonz != ""){
      prosesAwal = inputSukonz * parseInt(selectedValue);
      proses = parseInt(total_harga) - parseInt(tmp1);
      //  console.log(proses)
       prosesdua = proses + parseInt(prosesAwal);
       localStorage.setItem('zentoStorage2',selectedValue)
       localStorage.setItem('zentoStorage3',prosesAwal)
       sessionStorage.setItem('zentoStorage',prosesdua)
       select('#total_harga').innerHTML = "Rp " + prosesdua;
    } 
  }
  else if(selectedValue == tmp){
    // console.log("bener")
    return false
  }
  else{
    // alert(inputSukonz)
    if(inputSukonz != ""){  
    prosesAwal = inputSukonz * parseInt(selectedValue);
  
    proses =  parseInt(total_harga) + parseInt(prosesAwal);
   //  localStorage.setItem('zen',selectedValue);
   localStorage.setItem('zentoStorage2',selectedValue);
   localStorage.setItem('zentoStorage3', prosesAwal);
    sessionStorage.setItem('zentoStorage',proses)
    select('#total_harga').innerHTML = "Rp " + proses;
    }
  }


}, true)

on('click', '#radioLayanan', function(e) {
let radioLayanan = select('#radioLayanan');
// let inputJumlah = select('#inputSukonz').value
if(radioLayanan.checked = true){
  select('#triggerLayanan').style.display = "";
  select('#statusRoasted').style.display = "";
  // select('#triggerLayanan2').style.display = ""

}
}, true)


on('change', '#inputSukonz', function(e){
  let inputJumlah = select('#inputSukonz').value
  let radios = document.getElementsByClassName('roasted');
  select('#inputSukonz').style.border = "1px solid #3CD05D";
  select('#inputSukonz').style.backgroundColor = "#A4FFD7";
  select('#inputSukonz').style.color = "#3CD05D";
  select('#roastedSemua').style.border = "";
  select('#roastedSemua').style.backgroundColor = "";
  select('#labelSukonz').style.color = "";
  select('#triggerLayanan2').style.display = ""
  select('#rubahJumlahRoast').textContent = inputJumlah + " Kg";
  if(localStorage.getItem('zentoStorage2') != null){
   
  for (var i=0, iLen=radios.length; i<iLen; i++) {
radios[i].checked = false;
} 
  }
  // let radios = document.getElementsByClassName('roasted');
  for (var i=0, iLen=radios.length; i<iLen; i++) {
radios[i].disabled = false;
} 
}, true)

on('click', '#roastedSemua', function(e) {
  
  let ambilJumlahPesan1 = select('#jumlah_pesan').textContent.replace(/\D/g, "");
  let ambilJumlahPesan = select('#inputSukonz').value = ambilJumlahPesan1;
  select('#roastedSemua').style.border = "1px solid #3CD05D";
  select('#roastedSemua').style.backgroundColor = "#A4FFD7";
  select('#labelSukonz').style.color = "#3CD05D";
  select('#inputSukonz').style.border = "";
  select('#inputSukonz').style.backgroundColor = "";
  select('#inputSukonz').style.color = "";
  select('#triggerLayanan2').style.display = ""
  select('#rubahJumlahRoast').textContent = ambilJumlahPesan + " Kg";
  for (var i=0, iLen=radios.length; i<iLen; i++) {
    radios[i].disabled = false;
    } 

    for (var i=0, iLen=radios.length; i<iLen; i++) {
      radios[i].checked = false;
      } 

  }, true)


    


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        aos_init();
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfokio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

})();
