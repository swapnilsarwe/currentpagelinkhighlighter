var website = {
    // curr_page variable initialized as '', 
    // but on the object initialization 
    // will take the value of the current pages url pagename
    curr_page: '',
    // initilization function
    init: function(){
        // reads the current page url
        var url = window.location.pathname;
        // assigns a filename of the url to the curr_page variable
        website.curr_page = website.getPage(url);
    },
    // reads the url and returns the name of the page from the url
    getPage: function(url){
        // reads the last 'slash' / and takes text after it as a pagename
        return url.substring(url.lastIndexOf('/') + 1);
    },
    // this function will crosscheck between the menu links and 
    // the current page and highlight the link in the menu
    highlightLink: function(navlist, highlight){
        var link_array = new Array();
        // gets an reference of a object with the help of an id, 
        // which will help in reading all the links under it. 
        var mainnav = document.getElementById(navlist);
        // reading all the the 'a' link tags 
        // falling under the object identified by the passed id.
        // we get result as a collection of all 'a' object in an array 
        var main_nav_links = mainnav.getElementsByTagName('a');
        // looping through collection of 'a'
        for (i = 0; i < main_nav_links.length; i++) {
            // reading a href value from the current 'a' tag in the loop
            currHREF = main_nav_links[i].href;
            currHREFPage = website.getPage(currHREF);
            // checks the obtained clean pagename with the curr_page
            if (website.curr_page == currHREFPage) {
                // if found apply the class name, 
                // which you want to apply to the specific menu item
                main_nav_links[i].className = highlight;
                // exit the function immediately 
                // without checking further liks in menu
                // since to get the same link in the menu again 
                // has very less probability
                // still exceptions are possible, 
                // hence you can comment or remove 
                // the return statement below 
                // to check for each and every link 
                return;
            }
        }
    }
};
// When window is loaded completely.
window.onload = function(){
    // initiate the website object
    website.init();
    // call the disableLink function, 
    // param 1: id of the menu on which you want to highlight link
    // param 2: css class name which defines highlight property
    website.highlightLink('navbar', 'highlight');
};
