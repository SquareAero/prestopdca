jQuery(document).ready(function($) {
 
    var currentURL=window.location.origin+window.location.pathname;
    $(".menu-link").each((function(){
        $(this).prop("href")===currentURL&&$(this).addClass("active");
    }));
    
    
    
  // Testimonials carousel
  // $(".slideritetimonals, .partner-reviews").not('.slick-initialized').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //     dots: true, // enable dots
  // appendDots: $('.dosts'), // dots ko custom div me dalenge
  //   speed: 300,
  //   nextArrow: '<button class="slider-btn nextArrow"><i class="fa-solid fa-chevron-right"></i></button>',
  //   prevArrow: '<button class="slider-btn prevArrow"><i class="fa-solid fa-chevron-left"></i></button>'
  // });

  // Accordion functionality
 
  $(".accordian-title").first().addClass("active").next(".accordian-tab").show();
  $(".accordian-title").click(function () {
    if ($(this).hasClass("active")) return;
    $(".accordian-title").removeClass("active");
    $(".accordian-tab").slideUp();
    $(this).addClass("active").next(".accordian-tab").slideDown();
  });

	
/// Showcase
$('.tab-btn').on('click', function () {
	$('.tab-btn').removeClass('active');
	$(this).addClass('active');

	$('.tab-review').removeClass('show active');
	$($(this).data('target')).addClass('show active');
});






jQuery(document).ready(function($) {
  var $sidebar = $('.left-sidebar .sidebar-list ul');
  $sidebar.empty(); 

  // Create anchor links from headings
  $('.post-full__content').find('h2, h3, h4').each(function() {
    var $heading = $(this);
    var text = $heading.text();
    var id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    $heading.attr('id', id); 
    $sidebar.append('<li><a class="side-link" href="#' + id + '">' + text + '</a></li>');
  });

  // Handle click with 100px offset scroll
  $(document).on('click', '.left-sidebar .sidebar-list ul li a.side-link', function(e){
    e.preventDefault(); // Prevent default jump

    var targetId = $(this).attr('href');
    var $target = $(targetId);

    if ($target.length) {
      $('html, body').animate({
        scrollTop: $target.offset().top - 100 // Offset by 100px
      }, 300); // Duration: 600ms
    }

    $(this).parent().parent().find('.side-link').removeClass('active');
    $(this).addClass('active');
  });
});


});

/**********************Price page tolltip******************************/


jQuery(document).ready(function($) {
 
  $('td[title], th[title], tr[title]').each(function() {
    const $el = $(this);
    const titleText = $el.attr('title');

    if (!titleText || titleText.trim() === '') return;

    $el.removeAttr('title'); 

    if ($el.is('tr')) {
      const $firstCell = $el.find('td, th').first();
      const cellContent = $firstCell.html();
      $firstCell.html(`
        ${cellContent}
        <span class="tooltip-wrap">
          <img src="/wp-content/uploads/2025/07/info.webp" alt="info icon" />
          <span class="tooltip-content">${titleText}</span>
        </span>
      `);
    } else {
      // For <td> or <th>
      const cellContent = $el.html();
      $el.html(`
        ${cellContent}
        <span class="tooltip-wrap">
          <img src="/wp-content/uploads/2025/07/info.webp" alt="info icon" />
          <span class="tooltip-content">${titleText}</span>
        </span>
      `);
    }
  });
});


/************Price Page location*****/


// async function getUserLocation() {
//   try {
//     const response = await fetch('https://ipinfo.io/json?token=09631f057fc657');
//     const data = await response.json();
//     return data.country || 'US'; // Default to US if country not found
//   } catch (error) {
//     console.error('Error fetching IP info:', error);
//     return 'US'; // Fallback to US
//   }
// }

// async function getExchangeRates() {
//   const apiKey = 'bb83e4f244ad0d8af1e1a959';
//   const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     if (data.result === "success") {
//       return data.conversion_rates;
//     } else {
//       console.error('Exchange rate fetch failed:', data);
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching exchange rates:', error);
//     return null;
//   }
// }

// // ✅ Renamed variable to avoid conflict
// const countryCurrencyMap = {
//   'US': { symbol: '$', code: 'USD' },
//   'IN': { symbol: '₹', code: 'INR' },
//   'EU': { symbol: '€', code: 'EUR' },
//   // Add more mappings as needed
// };

// async function convertAllPrices() {
//   const userCountry = await getUserLocation();
//   const rates = await getExchangeRates();

//   const currencyInfo = countryCurrencyMap[userCountry] || countryCurrencyMap['US'];
//   const rate = rates?.[currencyInfo.code] || 1;

//   const priceElements = document.querySelectorAll('.pricing__box .sub-title, .tb__heading h3');

//   priceElements.forEach(el => {
//     const priceText = el.innerText.trim();
//     const match = priceText.match(/\$?(\d+(\.\d+)?)/); // Match numbers like $99 or 99

//     if (priceText.includes('$0')) {
//       el.innerText = `${currencyInfo.symbol}0`;
//     } else if (match) {
//       const usdValue = parseFloat(match[1]);
//       const converted = Math.round(usdValue * rate);
//       el.innerText = `${currencyInfo.symbol}${converted}`;
//     }
//   });
// }

// // Ensure code runs after DOM is fully loaded
// document.addEventListener('DOMContentLoaded', convertAllPrices);


// document.addEventListener("DOMContentLoaded", function() {
//   // 1. Mapping of currency codes to symbols
//   const currencySymbols = {
//     USD: "$", EUR: "€", INR: "₹", JPY: "¥",
//     GBP: "£", CAD: "C$", AUD: "A$", CNY: "¥",
//     CHF: "Fr.", RUB: "₽", BRL: "R$", KRW: "₩",
//     ZAR: "R", MXN: "$", SGD: "S$", HKD: "HK$",
//     // ...add all others from the GitHub source as needed...
//   };

//   document.querySelectorAll(".pricing-list .sub-title").forEach(el => {
//     const text = el.textContent.trim();
//     const [code, ...rest] = text.split(/\s+/);
//     const amount = rest.join(" ");
//     const upperCode = code.toUpperCase();

//     if (currencySymbols[upperCode]) {
//       el.textContent = currencySymbols[upperCode] + amount;
//     }
//   });
// });





const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});





window.addEventListener("load", function () {

  // Sirf pricing page ke liye
  if (window.location.pathname === "/pricing/") {
    document.getElementById("site-update-popup").style.display = "flex";
  }

});

function closePopup() {
  document.getElementById("site-update-popup").style.display = "none";
}


/*******slideritetimonals Home**********/

jQuery(document).ready(function ($) {

    console.log("Slider found:", $(".slideritetimonals").length);
    console.log("Slick available:", typeof $.fn.slick);

    $(".slideritetimonals").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 300,
        appendDots: $(".dosts")
    });

});



/**********Header serch toogle ****/


$(".hdr-search").click(function(e) {
    e.preventDefault();
    e.stopPropagation();

    $(".header-search-content").stop(true, true).fadeToggle(300);
});


/************************/

jQuery(function($) {
  const $body = $("body");
  const $header = $(".header");


    $(".icon_open").click(function() {
      $(".navbar_menu").addClass("open");
      $("body").addClass("overflow-hidden");
    });
    
    $(".icon_close").click(function() {
      $(".navbar_menu").removeClass("open");
      $("body").removeClass("overflow-hidden");
    });
    
    


  // Toggle submenu
  $(".has-children > a").click(function(e) {
    e.preventDefault();
    const $parent = $(this).parent();
    const $submenu = $parent.children(".submenu, .mega-menu");

    if ($parent.hasClass("open")) {
      $parent.removeClass("open");
      $submenu.stop(true, true).slideUp(300);
    } else {
      $(".has-children").removeClass("open").children(".submenu, .mega-menu").slideUp(300);
      $parent.addClass("open");
      $submenu.stop(true, true).slideDown(300);
    }
  });

  // Toggle dropdown
  $(".dropdown-toggle").click(function(e) {
    e.stopPropagation();
    const $dropdown = $(this).siblings(".dropdown-content");
    $(".dropdown-content").not($dropdown).slideUp(300);
    $dropdown.stop(true, true).slideToggle(300);
  });

  // Close dropdowns and submenus on outside click
  $(document).click(function(e) {
    if (!$(e.target).closest(".dropdown-toggle, .has-children").length) {
      $(".dropdown-content").slideUp(300);
      $(".has-children").removeClass("open").children(".submenu, .mega-menu").slideUp(300);
    }
  });

});

