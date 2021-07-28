(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(7),s=a.n(l),r=(a(16),a(10)),m=a(1),d=a(2),c=a(4),o=a(3),u=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:i,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},a,n.a.createElement("br",null),n.a.createElement("a",{href:l},"IMDB"))))});u.defaultProps={description:""};var p=function(e){var t=e.movies;return n.a.createElement("div",{className:"movies"},t.map((function(e){return n.a.createElement(u,Object.assign({key:e.imdbId},e))})))};p.defaultProps={movies:[]};var h=a(5),g=a(8),b=a.n(g),I=(a(20),function(e){var t=e.title,a=e.value,i=e.onChange,l=e.isRequired,s=e.isValid;return n.a.createElement(n.a.Fragment,null,n.a.createElement("input",{type:"text",name:t,className:b()("input",{invalidInput:!s&&l}),placeholder:"".concat(t[0].toUpperCase()).concat(t.slice(1)).concat(l?"*":""),value:a,onChange:i}),!s&&l&&n.a.createElement("p",null,"Please enter the ".concat(t)))}),v=(a(21),function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={title:"",isTitleValid:!0,description:"",imgUrl:"",isImgUrlValid:!0,imdbUrl:"",isImdbUrlValid:!0,imdbId:"",isImdbIdValid:!0,isFormValid:!0},e.makeInputValid=function(t){e.setState(Object(h.a)({},t,!0))},e.makeInputInValid=function(t){e.setState(Object(h.a)({},t,!1))},e.addInput=function(t){switch(e.setState(Object(h.a)({},t.target.name,t.target.value)),t.target.name){case"title":e.makeInputValid("isTitleValid");break;case"imgUrl":e.makeInputValid("isImgUrlValid");break;case"imdbUrl":e.makeInputValid("isImdbUrlValid");break;case"imdbId":e.makeInputValid("isImdbIdValid")}},e.findInvalidInputs=function(){""===e.state.title&&e.makeInputInValid("isTitleValid"),""===e.state.imgUrl&&e.makeInputInValid("isImgUrlValid"),""===e.state.imdbUrl&&e.makeInputInValid("isImdbUrlValid"),""===e.state.imdbId&&e.makeInputInValid("isImdbIdValid")},e.clearForm=function(){e.setState({title:"",isTitleValid:!0,description:"",imgUrl:"",isImgUrlValid:!0,imdbUrl:"",isImdbUrlValid:!0,imdbId:"",isImdbIdValid:!0})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.onAdd,a=this.state,i=a.title,l=a.isTitleValid,s=a.description,r=a.imdbUrl,m=a.isImgUrlValid,d=a.imgUrl,c=a.isImdbUrlValid,o=a.imdbId,u=a.isImdbIdValid;return n.a.createElement("form",{className:"form",onSubmit:function(a){a.preventDefault(),i&&r&&d&&o?(t(e.state),e.clearForm()):e.findInvalidInputs()}},n.a.createElement(I,{title:"title",value:i,onChange:this.addInput,isRequired:!0,isValid:this.state.isTitleValid}),n.a.createElement(I,{title:"description",value:s,onChange:this.addInput}),n.a.createElement(I,{title:"imgUrl",value:d,onChange:this.addInput,isRequired:!0,isValid:this.state.isImgUrlValid}),n.a.createElement(I,{title:"imdbUrl",value:r,onChange:this.addInput,isRequired:!0,isValid:this.state.isImdbUrlValid}),n.a.createElement(I,{title:"imdbId",value:o,onChange:this.addInput,isRequired:!0,isValid:this.state.isImdbIdValid}),n.a.createElement("button",{type:"submit",className:"button",disabled:!l||!m||!c||!u},"Add"))}}]),a}(i.Component)),f=a(9),V=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(m.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={movies:f},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(r.a)(e.movies),[t])}}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(p,{movies:e})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(v,{onAdd:this.addMovie})))}}]),a}(i.Component);s.a.render(n.a.createElement(V,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.e79cbeb7.chunk.js.map