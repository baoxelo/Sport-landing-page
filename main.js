const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)



//DATA BASE//
const database = {
    legendsInfomation: [
        {
            name: 'Kobe Bryant',
            position: 'Shooting Guard / Small Forward',
            backgroundImage: './assest/img/legend1.jpg',
            desc: "Kobe Bean Bryant (August 23, 1978 – January 26, 2020) was an American professional basketball player. A shooting guard, he spent his entire 20-year career with the Los Angeles Lakers in the National Basketball Association (NBA).",
            backgroundModal: './assest/img/modal1.png',
            image1: './assest/img/submodal1-1.png',
            image2: './assest/img/submodal1-2.jpg',
        },
        {
            name: 'Shaquille O Neal',
            position: 'Center / Powerful Forward',
            backgroundImage: './assest/img/legend2.jpg',
            desc: "Shaquille Rashaun O'Neal (born March 6, 1972), known commonly as \"Shaq\", is an American former professional basketball player who is a sports analyst on the television program Inside the NBA. He is a 7-foot-1-inch (2.16 m) and 325-pound (147 kg) center who played for six teams over his 19-year career in the National Basketball Association (NBA) and is a four-time NBA champion. O'Neal is regarded as one of the greatest basketball players and centers of all time.",
            backgroundModal: './assest/img/modal2.png',
            image1: './assest/img/submodal2-1.png',
            image2: './assest/img/submodal2-2.jpeg',
        },
        {
            name: 'Lebron James',
            position: 'Small Forward / Powerful Forward',
            backgroundImage: './assest/img/legend3.jpg',
            desc: "LeBron Raymone James Sr. (born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers in the National Basketball Association (NBA). Nicknamed \"King James\", he is considered to be one of the greatest basketball players in history and is often compared to Michael Jordan in debates over the greatest basketball player of all time.[a] James is the all-time leading scorer in NBA history and ranks fourth in career assists.",
            backgroundModal: './assest/img/modal3.png',
            image1: './assest/img/submodal3-1.png',
            image2: './assest/img/submodal3-2.png',
        },
        {
            name: 'Magic Johnson',
            position: 'Point Guard',
            backgroundImage: './assest/img/legend4.jpg',
            desc: "Earvin \"Magic\" Johnson Jr. (born August 14, 1959) is an American former professional basketball player. He is often regarded as the greatest point guard of all-time. Johnson played 13 seasons in the National Basketball Association (NBA). After winning a national championship with Michigan State in 1979, Johnson was selected first overall in the 1979 NBA draft by the Los Angeles Lakers, leading the team to five NBA championships during their Showtime era..",
            backgroundModal: './assest/img/modal4.png',
            image1: './assest/img/submodal4-1.png',
            image2: './assest/img/submodal4-2.png',
        },
        {
            name: 'Kareem Abdul-JABBAR',
            position: 'Center',
            backgroundImage: './assest/img/legend5.jpg',
            desc: "Kareem Abdul-Jabbar (born Ferdinand Lewis Alcindor Jr.; April 16, 1947) is an American former professional basketball player who played 20 seasons in the National Basketball Association (NBA) for the Milwaukee Bucks and the Los Angeles Lakers. During his career as a center, Abdul-Jabbar was a record six-time NBA Most Valuable Player (MVP).",
            backgroundModal: './assest/img/modal5.png',
            image1: './assest/img/submodal5-1.png',
            image2: './assest/img/submodal5-2.png',
        },
        {
            name: 'James Worthy',
            position: 'Small Forward',
            backgroundImage: './assest/img/legend6.jpg',
            desc: "James Ager Worthy (born February 27, 1961) is an American sports commentator, television host, analyst, and former professional basketball player. Nicknamed \"Big Game James\", he played his entire professional career with the Los Angeles Lakers in the National Basketball Association (NBA). Worthy was a seven-time NBA All-Star, a two-time All-NBA Team member who won three NBA championships and was voted the NBA Finals MVP in 1988.",
            backgroundModal: './assest/img/modal6.png',
            image1: './assest/img/submodal6-1.png',
            image2: './assest/img/submodal6-2.png',
        },
    ],
    
    finalResult: [
        {
            time: "Mon. May 8, 7:00 PM PDT",
            locate: "Final",
            homeName: "Lakers",
            homeImage: "./assest/img/Los-Angeles-Lakers-Fantasy-Basketball-Preview-1-750x430.png",
            homeScore: 104,
            guestName: "Warrior",
            guestImage: "./assest/img/GSW-logo.png",
            guestScore: 101,
        },
        {
            time: "Wed. May 10, 7:00 PM PDT",
            locate: "Final",
            homeName: "Lakers",
            homeImage: "./assest/img/Los-Angeles-Lakers-Fantasy-Basketball-Preview-1-750x430.png",
            homeScore: 106,
            guestName: "Warrior",
            guestImage: "./assest/img/GSW-logo.png",
            guestScore: 121,
        },
        {
            time: "Fri. May 12, 7:00 PM PDT",
            locate: "Final",
            homeName: "Lakers",
            homeImage: "./assest/img/Los-Angeles-Lakers-Fantasy-Basketball-Preview-1-750x430.png",
            homeScore: 122,
            guestName: "Warrior",
            guestImage: "./assest/img/GSW-logo.png",
            guestScore: 101,
        },
        {
            time: "Tue. May 16, 7:00 PM PDT",
            locate: "Final",
            homeName: "Lakers",
            homeImage: "./assest/img/Los-Angeles-Lakers-Fantasy-Basketball-Preview-1-750x430.png",
            homeScore: 126,
            guestName: "Nuggets",
            guestImage: "./assest/img/Denver Nuggets Logo (PNG480p) - Vector69Com.png",
            guestScore: 132,
        },
    ],
    contentSliders: [
        {
            desc: "Lakers comeback falls short, nuggets claim game 1",
            date: "1d",
            game: "Game",
            image: "./assest/img/slide1.jpg"
        },
        {
            desc: "Game 1 - Postgame Interview: Darvin Ham (5/16/23)",
            date: "1d",
            game: "Game",
            image: "./assest/img/slide2.jpg"
        },
        {
            desc: "Game 1 - Postgame Interview: Anthony Davis and Lebron James",
            date: "1d",
            game: "Game",
            image: "./assest/img/slide3.jpg"
        },
        {
            desc: "Laker prep for Nuggets",
            date: "1d",
            game: "Game",
            image: "./assest/img/slide4.jpg"
        },
        {
            desc: "Top Play: Lakers vs Wariors - 2023 Playoffs",
            date: "1d",
            game: "Game",
            image: "./assest/img/slide5.jpg"
        },
    ],
    ticketType: [
        {
            name: "Play off May 20",
            cost: 43.7,
        },
        {
            name: "Play off May 22",
            cost: 45.8,
        },
        {
            name: "Play off May 24",
            cost: 50.3,
        },
    ],
}




//SEARCH BUTTON//
const bannerSearchBtn = $('.banner__search-btn');
const bannerBox = $('.banner__search-box');
const closeSearchBox = $('.banner__search-close--btn');
const bannerSearh = {
    isSearch: false,
    handleEvents: function(){
        bannerSearchBtn.onclick = () => {
            bannerBox.classList.add('showed');
            const bannerBoxAnimation = bannerBox.animate([
                {
                    transform: 'translateX(100%)',
                },
                {
                    transform: 'translateX(0)',
                },
            ],{
                duration: 300
            })
            $('.banner__smallnav-list').classList.add('hiden');
            $('.banner__info').classList.add('hiden');
            setTimeout(()=> {
            $('.banner__search-box--input').focus();
            },300)
            bannerSearh.isSearch = true;
        };
        function closeSearch () {
            bannerBox.classList.remove('showed');
            $('.banner__smallnav-list').classList.remove('hiden');
            $('.banner__info').classList.remove('hiden');
            bannerSearh.isSearch = false;
        }
        do{
            document.onclick = function(e) {
                if(e.target.closest('.banner__search')){
        
                }else{
                    closeSearch();
                }
            }
            closeSearchBox.onclick = ()=> {
                closeSearch();
            }
        }while(this.isSearch === true)
    },
    start: function(){
        this.handleEvents()
    }
}
bannerSearh.start();




//BANNER BAR//
function bannerScroll() {
    if (document.documentElement.scrollTop > 138) {
        document.getElementById('scroll-top').classList.add('fixed-top');
        document.getElementById('schedule').style.marginTop = "90px";
    } else {
        document.getElementById('scroll-top').classList.remove('fixed-top');
        document.getElementById('schedule').style.marginTop = "0";
    }
}
window.onscroll = function() {bannerScroll()};




//SCHEDULE//
const overMatchList = $('.schedule__list-finish')
const scrollRightBtn = $('.js-scroll-schedule-right')
const scrollLeftBtn = $('.js-scroll-schedule-left')
const scheduleList = $('.schedule__list')
const scheduleItem = $('.schedule__item')
const schedule = {
    //Render score
    renderFinishSchedule: function(){
        const htmls = database.finalResult.map(function(result,index){
            return `
            <li class="schedule__item">
                <div class="schedule__item-wrap">
                    <div class="schedule__time">
                        <h4 class="schedule__time-desc">${result.time}</h4>
                        <span class="schedule__locate">${result.locate}</span>
                    </div>
                    <div class="schedule__result">
                        <div class="schedule__team">
                            <div class="schedule__team-decs">
                                <img src="${result.homeImage}" alt="" class="schedule__team-logo">
                                <h4 class="schedule__team-name">${result.homeName}</h4>
                            </div>
                            <div class="schedule__team-name-result">
                                <span class="schedule__team-score">${result.homeScore}</span>
                                <span class="schedule__team-win-icon ${result.homeScore > result.guestScore ? 'win' : ' '}">${result.homeScore > result.guestScore ? 'W' : 'L'}</span>
                            </div>
                        </div>
                        <div class="schedule__team">
                            <div class="schedule__team-decs">
                            <img src="${result.guestImage}" alt="" class="schedule__team-logo">
                                <h4 class="schedule__team-name">${result.guestName}</h4>
                            </div>
                            <div class="schedule__team-name-result">
                                <span class="schedule__team-score">${result.guestScore}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="schedule__video">
                    <a href="#" class="schedule__video-item">
                        <i class="schedule__video-icon fa-solid fa-video"></i>
                        <label for="" class="schedule__video-label">Watch Replay</label>
                    </a>
                    <a href="#" class="schedule__video-item">
                        <i class="schedule__video-icon fa-solid fa-angle-down"></i>
                        <label for="" class="schedule__video-label">Watch Replay</label>
                    </a>
                </div>
            </li>`
        })
        overMatchList.innerHTML = htmls.join('');
    },
    handleEvents: function() {
        //Scroll schedule
        scheduleList.scrollLeft = overMatchList.offsetWidth;
        scrollRightBtn.onclick = () => {
            scheduleList.classList.add('scrool-smooth');
            scheduleList.scrollLeft += scheduleItem.offsetWidth + 3;
        }
        
        scrollLeftBtn.onclick =  () => {
            scheduleList.classList.add('scrool-smooth');
            scheduleList.scrollLeft -= scheduleItem.offsetWidth + 3;
        }
        //Add others Event ...
    },
    start: function() {
        this.renderFinishSchedule();
        this.handleEvents();
    },
}
schedule.start();





//SLIDER//
const sliderItem = $('.slider__item')
const sliderBackground = $('.slider__background')
const sliderHeading = $('.slider__heading')
const sliderList = $('.slider__list')
const slider = {
    currentIndex: 0,
    defineProperties: function (){
        Object.defineProperty(this,'currentSlide',{
            get: function() {
                return database.contentSliders[this.currentIndex];
            }
        })
    },
    //Render Data
    renderSlide: function(){
        const htmls = database.contentSliders.map(function(content,index) {
            return `
            <li class="slider__item ${index === slider.currentIndex ? 'active' : ''}" data-index="${index}">
                <div class="slider__item-box hide-on-mobile">
                    <h3 class="slider__desc">${content.desc}</h3>
                </div>
                <div class="slider__item-footer">
                    <h3 class="slider__date hide-on-mobile">${content.date}</h3>
                    <i class="slider__item-footer-icon fa-solid fa-circle"></i>
                    <h3 class="slider__date hide-on-mobile">${content.game}</h3>
                </div>
            </li>
            `
        })
        sliderList.innerHTML = htmls.join('');
    },
    //Handle Events on slide
    handleEvents: function(){
        //Set when click to small content
        sliderList.onclick = function(e){
            const slideNode = e.target.closest('.slider__item:not(.ative)')
            if(slideNode) {
                slider.currentIndex = Number(slideNode.dataset.index)
                slider.loadCurrentSlide();
                slider.renderSlide();
                slideNode.classList.toggle = 'active'
            }
        }
    },
    //Scroll to next slide after 5s
    nextSlide: function() {
        setTimeout(() => {
            if(slider.currentIndex === database.contentSliders.length - 1){
                slider.currentIndex = 0
            }else{
                slider.currentIndex ++
            }
            slider.loadCurrentSlide();
            slider.renderSlide();
            slider.nextSlide();
        },5000);
    },
    //Load the current slide to heading
    loadCurrentSlide: function(){
        const sliderBackgroundAnimation = sliderBackground.animate([
            {                          
                opacity: 0,
            },
            {
                opacity: 1,
            },
        ],{
            duration: 400,
        })
        const sliderHeadingAnimation = sliderHeading.animate([
            {                             
                transform: 'translateX(50%)',
                opacity: 0
            },
            {
                transform: 'translateX(0)',
                opacity: 1
            },
        ],{
            duration: 400,
        })
        sliderHeading.innerText = this.currentSlide.desc;
        sliderBackground.style.backgroundImage = `url('${this.currentSlide.image}')`;
    },
    //Start all function
    start: function(){
        this.nextSlide();
        this.defineProperties();
        this.renderSlide();
        this.handleEvents();
        this.loadCurrentSlide();
    },
}
slider.start();




// BANNER MOBILE MENU //
var bannerMenuBtn = $('.js-banner-menu');
var bannerBar = $('.banner__nav');
var bannerWrap = $('.banner__nav-wrap')
var bannerClostBtn = $('.banner__nav-close--icon')

const bannerMenu = {
    handleEvents: function() {
        bannerMenuBtn.onclick = () => {
            bannerBar.classList.add('showed');
            $('.banner__smallnav-list').classList.remove('hiden');
        }
        bannerClostBtn.onclick = () => {
            bannerBar.classList.remove('showed');
        }
        bannerBar.onclick = () => {
            bannerBar.classList.remove('showed');
        }
        bannerWrap.onclick = function(event) {
            event.stopPropagation();
        }
    },
    start: function() {
        this.handleEvents();
    }
}
bannerMenu.start();





// MODAL SELL TICKET //
const buyTicketBtns = $$('.buy-ticket-btn')
const modalTemplateTicket = $('.modal__ticket')
const modalTicketContainer = $('.modal__ticket-container')
const ticketList = $('.modal__ticket-type--list')
const ticketTypeItem = $('.modal__ticket-type--item')

//This is the Final bill (INCLUDE TOTAL COST AND NUMBER OF TICKET) send back to the JSON SEVER !!!
const cartTicket = {
    ticket: [database.ticketType.length],
    totalBill: 0,
}
//Ticket contructor 
function Ticket(name, cost) {
    this.name = name;
    this.cost = cost; 
    this.number = 0;
    this.totalCost = 0;
}
//totalBill calculation
function totalBillCal (){
    var result = 0;
    for(let i=0; i<cartTicket.ticket.length;i++){
        result += Number(cartTicket.ticket[i].totalCost);
    }
    result = result.toFixed(2)
    return result
}
const modalTicket = {
    getCartTicket: function (){
        for(let i=0;i<database.ticketType.length;++i){
            cartTicket.ticket[i] = new Ticket (database.ticketType[i].name,database.ticketType[i].cost)
        }
    },
    handleModal: function() {
        //Show and hide template
        for(let buyTicketBtn of buyTicketBtns){
            buyTicketBtn.onclick = () => {
                modalTemplateTicket.classList.add('showed')
            }
        }
        modalTemplateTicket.onclick = () => {
            modalTemplateTicket.classList.remove('showed')
        }
        modalTicketContainer.onclick = (e) => {
            e.stopPropagation();
        }

        //Handle button of ticket 
        ticketList.onclick = function(e) {
            var ticketItemNode = e.target.closest('.modal__ticket-type--item')
            var index = Number(ticketItemNode.dataset.index);
            switch (e.target) {
                case (ticketItemNode.querySelector('.modal-ticket-num-decrease')) :{
                    if(cartTicket.ticket[index].number === 0){

                    }else{
                        cartTicket.ticket[index].number--
                    }
                    break;
                }
                case (ticketItemNode.querySelector('.modal-ticket-num-increase')) :{
                    cartTicket.ticket[index].number++
                    break;
                }
                case (ticketItemNode.querySelector('.modal__ticket-type--remove')) : {
                    cartTicket.ticket[index].number = 0
                    break;
                }
                default :{
                    break;
                }
            }
            cartTicket.ticket[index].totalCost = (cartTicket.ticket[index].number * cartTicket.ticket[index].cost).toFixed(2)
            cartTicket.totalBill = totalBillCal() 
            modalTicket.renderTickets();
        }
    },
    renderTickets: function() {
        var htmls = database.ticketType.map(function(type,index){
            return `
            <li class="modal__ticket-type--item" data-index="${index}">
                <div class="modal__ticket-type--item-left">
                    <i class="modal__ticket-type--remove fa-solid fa-xmark"></i>
                    <h4 class="modal__ticket-type--name">${type.name}</h4>
                </div>
                <div class="modal__ticket-type--item-right">
                    <span class="modal__ticket-type--costwrap">
                        $
                        <span class="modal__ticket-type--cost">${type.cost}</span>
                        <i class=" modal__ticket--iconcost fa-solid fa-ticket"></i>
                    </span>
                    <span class="modal-ticket-type--numberwrap">
                        <i class="modal-ticket-num-decrease fa-solid fa-minus"></i>
                        <span class="modal-ticket-type--numbertotal">${cartTicket.ticket[index].number}</span>
                        <i class="modal-ticket-num-increase fa-solid fa-plus"></i>
                    </span>
                    <span class="modal-ticket-type--totalcountwrap">
                        $
                        <span class="modal-ticket-type--totalcount">${cartTicket.ticket[index].totalCost}</span>
                    </span>
                </div>
            </li>
            `
        })
        ticketList.innerHTML = htmls.join("");
        $('.modal__ticket-finalcost').innerHTML = cartTicket.totalBill;
    },
    start: function() {
        this.getCartTicket();
        this.renderTickets();
        this.handleModal();
    }
}
modalTicket.start();




// MODAL FORM //
Validator.isRequired = function(selector,message){
    return {
        selector: selector,
        test: function(value){
            return value.trim() ? undefined : message
        }
    }
}
Validator.isEmail = function(selector,message){
    return {
        selector: selector,
        test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message
        }
    }
}
Validator.minLength = function(selector,min,message){
    return {
        selector: selector,
        test: function(value){
            return value>=min ? undefined : message
        }
    }
}
function Validator (option) {
    function getParent(element,selector) {
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement
            }else{
                element = element.parentElement
            }
        }
    }
    var selectorRules = {}
    function validate(inputElement,rule) {
        var errorElement = getParent(inputElement,option.formGroupSelector).querySelector('.form-message')
        var errorMessage;
        var rules = selectorRules[rule.selector]
        for (var i=0; i<rules.length; ++i){
            errorMessage = rules[i](inputElement.value);
            if(errorMessage){
                break;
            }
        }
        if(errorMessage){
            errorElement.innerText = errorMessage;
            getParent(inputElement,option.formGroupSelector).classList.add('invalid');
        }else{
            getParent(inputElement,option.formGroupSelector).classList.remove('invalid');
            errorElement.innerText = '';
        }
        return !errorMessage;

    }
    var formElement = document.querySelector(option.form)
    if(formElement) {

        //Khi submit form
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;
            //Lặp qua từng rule và validate
            option.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid){
                    isFormValid = false;
                }
            });
            
            if(isFormValid){
                //Trường hợp submit với Javascript
                if(typeof option.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    console.log(enableInputs)
                    var formValue = Array.from(enableInputs).reduce(function(values,input){
                        values[input.name] = input.value ;
                        console.log(values)
                        return values;
                    },{});

                    option.onSubmit({formValue})
                }
                //Trường hợp submit với hành vi mặc định
                else{
                }
            }
        }
    }
    if(formElement) {
        option.rules.forEach(function(rule){
            //Lưu lại các rule 
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);

            }else{
                selectorRules[rule.selector] = [rule.test];
            }
            
            var inputElement = formElement.querySelector(rule.selector)
            var errorElement = getParent(inputElement,option.formGroupSelector).querySelector('.form-message')
            if(inputElement) {
                inputElement.onblur = () => {
                    validate(inputElement,rule)
                }
                inputElement.oninput = () => {
                    var errorElement = getParent(inputElement,option.formGroupSelector).querySelector('.form-message');
                    getParent(inputElement,option.formGroupSelector).classList.remove('invalid');
                    errorElement.innerText = '';
                }
            }
        })
    }
}


// LEGEND //
// Render legends
const legendList = $('.legend__list')
const modalView = $('.modal')
const modalContainer = $('.modal__container')

function renderLegends (list) {
    const htmls = list.map(function(legend,index){
        return `
        <li class="legend__item col" data-index="${index}">
            <div class="legend__item-wrap">
                <div class="legend__ticker">
                    <i class="legend__item-icon fa-regular fa-star"></i>
                </div>
                <div class="legend__item-imgwrap">
                    <img src="${legend.backgroundImage}" alt="" class="legend__img">
                    <div class="legend__modal">
                        <span class="legend__modal-open">View more</span>
                    </div>
                </div>
                <div class="legend__info">
                    <h1 class="legend__name">${legend.name}</h1>
                    <div class="legend__position-wrap">
                        <i class="legend__position-icon fa-solid fa-circle"></i>
                        <h2 class="legend__position">Position: ${legend.position}</h2>
                    </div>
                    <p class="legend__desc">${legend.desc}</p>
                    <a href="" class="legend__info-more">More on Wikipedia ...</a>
                </div>
            </div>
        </li>`
    })
    legendList.innerHTML = htmls.join("");
}
renderLegends(database.legendsInfomation);

//Modal legend
const legendModalHeading = $('.modal__heading')
const legendModalPosition = $('.modal__position')
const legendModalSlide = $('.modal__slider-img')
const legendModalImg1 = $('.modal__sub-img-item__1')
const legendModalImg2 = $('.modal__sub-img-item__2')
const legendOpenViews = $$('.legend__modal-open')
const modalLegend = {
    currentIndex: 0,
    defineProperties: function(){
        Object.defineProperty(this,'currentLegend',{
            get: function(){
                return database.legendsInfomation[this.currentIndex]
            }
        })
    },
    loadCurrentLegend: function(){
        legendModalHeading.innerText = this.currentLegend.name
        legendModalPosition.innerText = this.currentLegend.position
        legendModalSlide.style.backgroundImage = `url(${this.currentLegend.backgroundModal})`
        legendModalImg1.style.backgroundImage = `url('${this.currentLegend.image1}')`
        legendModalImg2.style.backgroundImage = `url('${this.currentLegend.image2}')`
    },
    handleEvents: function(){
        for(let legendOpenView of legendOpenViews){
            legendOpenView.onclick = function(e) {
            var legendItemNode = e.target.closest('.legend__item')
            //Show the modal
                modalView.classList.add('showed');
                modalView.onclick = function () {
                    modalView.classList.remove('showed')
                }
                modalContainer.onclick = function (e) {
                    e.stopPropagation();
                }
            //Get the currentLegend
            modalLegend.currentIndex = Number(legendItemNode.dataset.index);
            modalLegend.loadCurrentLegend();
            }
        }
    },
    start: function() {
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentLegend();
    },
}
modalLegend.start();

