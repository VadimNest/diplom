const app = {
	data() {
		return {
		  burgerActive: false,
		  tagActive: false,

		  width: 0,
// MAIN NAV------------------------------------------------------------------------------------------------------------------------------------------------------------------
	route: "home",

	nav: [
		{title: "Главная", name: "home"},
		{title: "Мой ресторан", name: "myRestaurant"},
		{title: "Корзина", name: "basket"},
	],


// BURGER NAV------------------------------------------------------------------------------------------------------------------------------------------------------------------
	burgerNav: [
		{title: "Главная", name: "home"},
		{title: "Мой ресторан", name: "myRestaurant"},
		{title: "Корзина", name: "basket"},
		{title: "Личный кабинет", name: "personal"},
		{title: "История заказов", name: "history"},
		{title: "Акции", name: "discounts"},
	],


// HOME NAV (RESTAURANTS / MENU)------------------------------------------------------------------------------------------------------------------------------------------------------------------
	MainNav: [
		{title: "Рестораны", name: "menu"},
		{title: "Меню", name: "restaurants"},
	],

	mainNavRoute: "restaurants",

	mainNavRestMenuElem:
	{
		mainNavRestMenuElemFirst: true,
		mainNavRestMenuElemSecond: false,
	},


// RESTAURANT--------------------------------------------------
	RestaurantData:{
		id: '',
		name: 'Кавказ',
		star: '5.0',
		tag: '',
		free: 1500,
		time: 50,
	},


// MY RESTAURANT CARDS--------------------------------------------------

	myRestaurantPopupData:{
		name: '',
		star: '5.0',
		tag: '',
		free: false,
		time: null,
		price: null,
		description: '',
	},

	myRestaurantCardsData:[
		{id: 0, name:'Джек-бургер', price:'299', time:'7', description:'Котлета из мраморной говядины, маринованный огурчик, салат, фирменныйсоус.', image:''},
		{id: 1, name:'Крабсбургер', price:'400', time:'3', description:'Котлета из мраморной говядины, маринованный огурчик, салат, фирменныйсоус.', image:''},
		{id: 2, name:'Крабсбургер', price:'150', time:'3', description:'Котлета из мраморной говядины, маринованный огурчик, салат, фирменныйсоус.', image:''},
		{id: 3, name:'Крабсбургер', price:'150', time:'5', description:'Котлета из мраморной говядины, маринованный огурчик, салат, фирменныйсоус.', image:''},
		{id: 4, name:'Крабсбургер', price:'200', time:'3', description:'Котлета из мраморной говядины, маринованный огурчик, салат, фирменныйсоус.', image:''},
	],


// MY RESTAURANT DATA---------------------------------------------------
	myRestaurantData:{
		name: 'Кавказ',
		free: 800,
		time: 20,
	},

	myRestaurantChangeMainDataPopup:{
		popupActive: false,
		name: '',
		free: null,
		time: null,
	},
	myRestaurantUploadImages:[],



// MY RESTAURANT DATA---------------------------------------------------
	myRestaurantData:{
		name: 'Кавказ',
		free: 800,
		time: 20,
	},

	myRestaurantChangeMainDataPopup:{
		popupActive: false,
		name: '',
		free: null,
		time: null,
	},
// MY RESTAURANT POSITIONS--------------------------------------------------

  myRestaurantAddPositionPopup:{
		popupActive: false,
		p: '',
		color: '#f6b73c',
	},
	myRestaurantSliderSalesElems: [
		{id:0, p:'1', backgroundColor:'yellow'},
		{id:1, p:'2', backgroundColor:'yellow'},
		{id:2, p:'3', backgroundColor:'yellow'},
		{id:3, p:'4', backgroundColor:'yellow'},
		{id:4, p:'5', backgroundColor:'yellow'},
	],
// MY RESTAURANT SALES--------------------------------------------------

	myRestaurantAddSalePopup:{
		popupActive: false,
		p: '',
		color: '#f6b73c',
	},
	myRestaurantSliderSalesElems: [
		{id:0, p:'1', backgroundColor:'yellow'},
		{id:1, p:'2', backgroundColor:'yellow'},
		{id:2, p:'3', backgroundColor:'yellow'},
		{id:3, p:'4', backgroundColor:'yellow'},
		{id:4, p:'5', backgroundColor:'yellow'},
	],

	myRestaurantSliderSales:
	{
		slider: null,
		sliderWidth: null,
		sliderElemWidth: null,
		sliderCount: 0,
		sliderCountElems: 0,
		sliderGap:0,
		sliderSlidesVisibleCount:0,
	},
// HOME ADVERTISING CARDS------------------------------------------------------------------------------------------------------------------------------------------------------------------

	homeSliderAdvertisingCards: [
		{id:'0', name:'Киев', stars:'5.0', free:2000, favorites:true, description:'Украинская народная кухня. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'},
		{id:'1', name:'Москва', stars:'4.0', free:900, favorites:true, description:'Кухни народов Кавказа. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'},
		{id:'2', name:'Георгий', stars:'5.0', free:1500, favorites:false, description:'Кухни народов Кавказа. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'},
		{id:'3', name:'Кавказ', stars:'4.8', free:500, favorites:true, description:'Кухни народов Кавказа. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'}
	],

	homeRestaurantsSliderAdvertising:
	{
		slider: null,
		sliderWidth: null,
		sliderElemWidth: null,
		sliderCount: 0,
		sliderCountElems: 0,
		sliderGap:0,
		sliderSlidesVisibleCount:0,
	},
// TAGS LIST------------------------------------------------------------------------------------------------------------------------------------------------------------------

	tagsList:
	[
		{tagTitle:'Первое'},
	],


	searchCity:'Владикавказ',
// HOME MENU CARDS------------------------------------------------------------------------------------------------------------------------------------------------------------------



	homeMenuCards:
	[
		{id:'0', name:'Джек-бургер', stars:'5.0', time:'5', free:true, favorites:true, description:'Украинская народная кухня. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'},
		{id:'1', name:'Крабсбургер', stars:'4.0', time:'7', free:true, favorites:false, description:'Кухни народов Кавказа. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'},
		{id:'2', name:'Джек-бургер', stars:'5.0', time:'5', free:false, favorites:true, description:'Кухни народов Кавказа. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'},
		{id:'3', name:'Джек-бургер', stars:'4.8', time:'3', free:true, favorites:true, description:'Кухни народов Кавказа. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'}
	],

	searchMenu: '',

	searchMenuCards:null,
// HOME RESTAURANTS CARDS------------------------------------------------------------------------------------------------------------------------------------------------------------------

	homeRestaurantCards:
	[
		{id:'0', name:'Киев', stars:'5.0', free:2000, favorites:true, description:'Украинская народная кухня. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'},
		{id:'1', name:'Москва', stars:'4.0', free:900, favorites:true, description:'Кухни народов Кавказа. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'},
		{id:'2', name:'Георгий', stars:'5.0', free:1500, favorites:false, description:'Кухни народов Кавказа. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'},
		{id:'3', name:'Кавказ', stars:'4.8', free:500, favorites:true, description:'Кухни народов Кавказа. Традиционные блюда. Мясо, рыба, птица. Вегетарианская кухня.', city:'Владикавказ', tag:'fastFood'}
	],

	searchRestaurants: '',

	searchRestaurantsCards:null,
// HOME SLIDER SALES------------------------------------------------------------------------------------------------------------------------------------------------------------------
	homeSliderSalesElems: [
		{p:'Скидка на завтраки 10% до 10:00'},
		{p:'2'},
		{p:'3'},
		{p:'4'},
		{p:'5'},
		{p:'5'},
		{p:'5'},
		{p:'5'},
		{p:'5'},
		{p:'5'},
		{p:'5'},
	],

	homeSliderSales:
	{
		slider: null,
		sliderWidth: null,
		sliderElemWidth: null,
		sliderCount: 0,
		sliderCountElems: 0,
		sliderGap:0,
		sliderSlidesVisibleCount:0,
	},
// HOME SLIDER SALES------------------------------------------------------------------------------------------------------------------------------------------------------------------
	discountsSlides: [
		{p:'Скидка на завтраки 10% до 10:00', backgroundColor: '#29E725'},
		{p:'Скидка на завтраки 10% до 10:00', backgroundColor: '#9757FF'},
		{p:'Скидка на завтраки 10% до 10:00'},
		{p:'Скидка на завтраки 10% до 10:00', backgroundColor: '#29E725'},
		{p:'Скидка на завтраки 10% до 10:00'},
		{p:'Скидка на завтраки 10% до 10:00', backgroundColor: '#5786FF'},
		{p:'Скидка на завтраки 10% до 10:00', backgroundColor: '#29E725'},
		{p:'Скидка на завтраки 10% до 10:00', backgroundColor: '#29E725'},
		{p:'Скидка на завтраки 10% до 10:00', backgroundColor: 'pink'},
		{p:'Скидка на завтраки 10% до 10:00'},
	],
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
	}
},
	
	
watch:{
	route(){
		if(this.route=="home"){
			this.sliderGetComponetns()
			this.homeSliderRestaurantsGetComponetns()
		}
		else if(this.route=="myRestaurant") {
			this.myRestaurantSliderSalesGetComponetns() 
		} 
	},

	burgerActive(){
	  if (this.burgerActive==true) {
		  const burgerItem = document.getElementsByClassName("burgerList")
		  burgerItem[0].classList.add('burgerListActive')
	  }
	  else {
		  const burgerItem = document.getElementsByClassName("burgerList")
		  burgerItem[0].classList.remove('burgerListActive')
	  }
	},

	searchRestaurants() {
		this.searchRestaurantsCards = this.homeRestaurantCards.filter(slide =>
		slide.name.toLowerCase().includes(this.searchRestaurants.toLowerCase()))
	},
	searchMenu(){
		this.searchMenuCards = this.homeMenuCards.filter(slide =>
		slide.name.toLowerCase().includes(this.searchMenu.toLowerCase()))
	},
},


methods:{
	myRestaurantOpenFiles()
	{
		 this.$refs.inputImage.click()
	},
	myRestaurantSelectImages()
	{
		let files = Array.from(this.$refs.inputImage.files)

		files.forEach(file =>{
			const reader = new FileReader()

			reader.addEventListener('load', () =>{
			const preview ={
				name: file.name,
				image:reader.result
			}

			this.myRestaurantUploadImages[0] = preview
			})

		reader.readAsDataURL(file)
		})
	},
	myRestaurantSaveNewPosition(){
	
		const obj = 
		{
			image: this.myRestaurantUploadImages[0].image,
			name: this.myRestaurantPopupData.name,
			star: this.myRestaurantPopupData.star,
			tag: this.myRestaurantPopupData.tag,
			time: this.myRestaurantPopupData.time,
			price: this.myRestaurantPopupData.price,
			description: this.myRestaurantPopupData.description
		}

		this.myRestaurantCardsData.unshift(obj)
		this.homeMenuCards.unshift(obj)
		this.homeGetRestaurants()
		this.myRestaurantPopupData.name ='',
		this.myRestaurantPopupData.tag ='',
		this.myRestaurantPopupData.time ='',
		this.myRestaurantPopupData.price ='',
		this.myRestaurantPopupData.description =''
		this.myRestaurantUploadImages[0] = ''
		console.log(this.myRestaurantUploadImages)
	},
	myRestaurantSaveNewDiscount(){
		let obj =
		{
			id: this.myRestaurantSliderSalesElems.length+1,
			p: this.myRestaurantAddSalePopup.p,
			backgroundColor: this.myRestaurantAddSalePopup.color,
		}

		this.myRestaurantSliderSalesElems.push(obj)
		this.myRestaurantAddSalePopup.p = '',
		this.myRestaurantAddSalePopup.backgroundColor = ''
	},
	myRestaurantSaveMainData(){
		this.myRestaurantData.name=this.myRestaurantChangeMainDataPopup.name
		this.myRestaurantData.free=this.myRestaurantChangeMainDataPopup.free
		this.myRestaurantData.time=this.myRestaurantChangeMainDataPopup.time

		this.myRestaurantChangeMainDataPopup.name=
		this.myRestaurantChangeMainDataPopup.free=
		this.myRestaurantChangeMainDataPopup.time=''
	},

	myRestaurantDeletePosition(idx)
	{
		this.myRestaurantCardsData.splice(idx, 1)
		// let deleted[0].id = this.myRestaurantCardsData.splice(idx, 1) на бэк для удаления
	},

	myRestaurantDeleteSale(idx){
		this.myRestaurantSliderSalesElems.splice(idx, 1)
		// let deleted[0].id = this.myRestaurantSliderSalesElems.splice(idx, 1) на бэк для удаления
	},

	resizeSlidersDataUpdate() {
		this.sliderGetComponetns()
		this.homeSliderRestaurantsGetComponetns()
		this.myRestaurantSliderSalesGetComponetns()
  },

// --------------------------------------------------------------------------------------------------------------------------------------------


	sliderGetComponetns() //home__slider-advertising-initialization
	{
		if(this.route=="home"){
			setTimeout(
				() =>{
					this.homeSliderSales.slider = this.$refs.homeSalesSlider,
					this.homeSliderSales.sliderGap = parseInt((getComputedStyle(this.homeSliderSales.slider).columnGap).replace(/\D+/g,""))
					this.homeSliderSales.sliderWidth = this.$refs.homeSalesSlider.offsetWidth,
					this.homeSliderSales.sliderElemWidth = this.$refs.homeSalesSliderElem.offsetWidth,
					this.homeSliderSales.sliderCountElems = this.homeSliderSalesElems.length,
					this.homeSliderSales.sliderSlidesVisibleCount = Math.floor(this.homeSliderSales.sliderWidth/(this.homeSliderSales.sliderElemWidth + 20 + this.homeSliderSales.sliderGap))
				}
				, 1000);
		}
	},


	slider(direction) //home__slider-advertising
	{
		(direction) ? this.homeSliderSales.sliderCount++ : this.homeSliderSales.sliderCount--
		(this.homeSliderSales.sliderCount>this.homeSliderSales.sliderCountElems-this.homeSliderSales.sliderSlidesVisibleCount) ?
		this.homeSliderSales.sliderCount = 0 : (this.homeSliderSales.sliderCount<0) ?
		this.homeSliderSales.sliderCount = this.homeSliderSales.sliderCountElems - this.homeSliderSales.sliderSlidesVisibleCount  : ''

		this.homeSliderSales.slider.style.marginLeft=
		-(this.homeSliderSales.sliderCount*this.homeSliderSales.sliderElemWidth+
		this.homeSliderSales.sliderCount*this.homeSliderSales.sliderGap+this.homeSliderSales.sliderCount*20) +'px'
	},
// --------------------------------------------------------------------------------------------------------------------------------------------
	homeSliderRestaurantsGetComponetns() //home__slider-restaurants-advertising-initialization
	{
		if(this.route=="home"){
			setTimeout(
				() =>{
					this.homeRestaurantsSliderAdvertising.slider = this.$refs.homeRestaurantsSlider,
					this.homeRestaurantsSliderAdvertising.sliderGap = parseInt((getComputedStyle(this.homeRestaurantsSliderAdvertising.slider).columnGap).replace(/\D+/g,""))
					this.homeRestaurantsSliderAdvertising.sliderWidth = this.$refs.homeRestaurantsSlider.offsetWidth,
					this.homeRestaurantsSliderAdvertising.sliderElemWidth = this.$refs.homeRestaurantSliderChild.offsetWidth,
					this.homeRestaurantsSliderAdvertising.sliderCountElems = this.homeSliderAdvertisingCards.length,
					this.homeRestaurantsSliderAdvertising.sliderSlidesVisibleCount = Math.floor(this.homeRestaurantsSliderAdvertising.sliderWidth/(this.homeRestaurantsSliderAdvertising.sliderElemWidth + 20 + this.homeRestaurantsSliderAdvertising.sliderGap))
				}
				, 1000);
		}
	},

	homeRestaurantsSlider(direction) //home__slider-advertising
	{
		(direction) ? this.homeRestaurantsSliderAdvertising.sliderCount++ : this.homeRestaurantsSliderAdvertising.sliderCount--
		(this.homeRestaurantsSliderAdvertising.sliderCount>this.homeRestaurantsSliderAdvertising.sliderCountElems-this.homeRestaurantsSliderAdvertising.sliderSlidesVisibleCount) ?
		this.homeRestaurantsSliderAdvertising.sliderCount = 0 : (this.homeRestaurantsSliderAdvertising.sliderCount<0) ?
		this.homeRestaurantsSliderAdvertising.sliderCount = this.homeRestaurantsSliderAdvertising.sliderCountElems - this.homeRestaurantsSliderAdvertising.sliderSlidesVisibleCount  : ''

		this.homeRestaurantsSliderAdvertising.slider.style.marginLeft=
		-(this.homeRestaurantsSliderAdvertising.sliderCount*this.homeRestaurantsSliderAdvertising.sliderElemWidth+
		this.homeRestaurantsSliderAdvertising.sliderCount*this.homeRestaurantsSliderAdvertising.sliderGap+this.homeRestaurantsSliderAdvertising.sliderCount*20) +'px'
	},


// --------------------------------------------------------------------------------------------------------------------------------------------

	myRestaurantSliderSalesGetComponetns() //home__slider-restaurants-advertising-initialization
	{
		if(this.route=="myRestaurant"){
			setTimeout(
				() =>{
					this.myRestaurantSliderSales.slider = this.$refs.myRestaurantDiscountElems,
					this.myRestaurantSliderSales.sliderGap = parseInt((getComputedStyle(this.myRestaurantSliderSales.slider).columnGap).replace(/\D+/g,""))
					this.myRestaurantSliderSales.sliderWidth = this.$refs.myRestaurantDiscountElems.offsetWidth,
					this.myRestaurantSliderSales.sliderElemWidth = this.$refs.myRestaurantDiscountChild.offsetWidth,
					this.myRestaurantSliderSales.sliderCountElems = this.myRestaurantSliderSalesElems.length,
					this.myRestaurantSliderSales.sliderSlidesVisibleCount = Math.floor(this.$refs.myRestaurantDiscountElemsCanvas.offsetWidth/(this.myRestaurantSliderSales.sliderElemWidth + this.myRestaurantSliderSales.sliderGap))
				}
				, 1000);
		}
	},

	myRestaurantSalesSlider(direction) //home__slider-advertising
	{
		(direction) ? this.myRestaurantSliderSales.sliderCount++ : this.myRestaurantSliderSales.sliderCount--
		(this.myRestaurantSliderSales.sliderCount>this.myRestaurantSliderSales.sliderCountElems-this.myRestaurantSliderSales.sliderSlidesVisibleCount) ?
		this.myRestaurantSliderSales.sliderCount = 0 : (this.myRestaurantSliderSales.sliderCount<0) ?
		this.myRestaurantSliderSales.sliderCount = this.myRestaurantSliderSales.sliderCountElems - this.myRestaurantSliderSales.sliderSlidesVisibleCount  : ''

		this.myRestaurantSliderSales.slider.style.marginLeft=
		-(this.myRestaurantSliderSales.sliderCount*this.myRestaurantSliderSales.sliderElemWidth+
		this.myRestaurantSliderSales.sliderCount*this.myRestaurantSliderSales.sliderGap) +'px'
		console.log(this.myRestaurantSliderSales)
	},

// --------------------------------------------------------------------------------------------------------------------------------------------


	homeGetRestaurants(){ //запись карточек главной страницы в буфер для поиска/фильтров
		this.searchRestaurantsCards = this.homeRestaurantCards,
		this.searchMenuCards = this.homeMenuCards
	},
},

// computed:{
//       searchRestaurants(){
//            return this.homeRestaurantCards.filter( item =>{
//                return item.name.toLowerCase().includes(this.searchRestaurants.toLowerCase())
//             })
//       }
// },

	created(){
		this.sliderGetComponetns() //home__slider-advertising
		this.homeSliderRestaurantsGetComponetns() //home__slider-restaurants-advertising
		this.homeGetRestaurants() //for search
		this.myRestaurantSliderSalesGetComponetns() //myRestaurantSliderSales
		window.addEventListener('resize', this.resizeSlidersDataUpdate);
	},

}

Vue.createApp(app).mount('#app')