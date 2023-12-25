
// http://localhost:3000/priceCheck/chair // 
function checkPrice() {
    const furnitureName = $('#furnitureInput').val();
    $.get(`/priceCheck/${furnitureName}`, function(data) {
        $('#priceDisplay').text(`Price: ${data.price}`);
    });
}
