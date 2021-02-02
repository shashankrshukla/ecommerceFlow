const { assert } = require("chai")

describe("Search functionality", function () {

    it("Searching for a product and adding to the cart to verify the final amount", function () {
        browser.url("http://automationpractice.com/index.php")
        $('#search_query_top').setValue("dress")
        $('button[name="submit_search"]').click()
        browser.pause(4000)
        $('a[class="product_img_link"]').click()
        var strPrice = $('#our_price_display').getText()
        var itemprice = strPrice.slice(1)
        console.log(itemprice)
        $('span*=Add to cart').click()
        browser.pause(4000)
        browser.refresh()
        $('a[title="View my shopping cart"]').click()
        var crtPrice = $('#total_product').getText()
        var cartprice = crtPrice.slice(1)
        console.log(cartprice)
        assert.equal(itemprice, cartprice, 'ItemPrice does not equal cart price')
    })



})