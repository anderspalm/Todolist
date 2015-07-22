// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// $('mark_complete').on('click', function(event) {
// 	// var sound = new Audio("file.wav"); // buffers automatically when created
// 	// sound.play();
// 	$('.table_splitter').appendto

// };

var now = new Date();
 
// Array list of days.
var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
 
// Array list of months.
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
 
// Calculate the number of the current day in the week.
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
 
// Calculate four digit year.
function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
                                }
 
// Join it all together
today =  days[now.getDay()] + ", " +
         months[now.getMonth()] + " " +
         date + ", " +
         (fourdigits(now.getYear())) ;
 
// Print out the data.
document.write(today);