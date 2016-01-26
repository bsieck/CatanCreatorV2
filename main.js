function generateTile(val) {
	return '<li><div class="hex-sm"><span>' + val + '</span></div></li>';
}

function rowFactory(isEven, length) {
	var evenRowHtml = '<ul class="even-row">';
	var oddRowHtml = '<ul class="odd-row">';
	var rowHtml = '';
	
	if(isEven) {
		rowHtml += evenRowHtml;
		
		for(i=0;i<length-1;i++){
			rowHtml += generateTile(4);
		}
	} 
	if (!isEven) {
		rowHtml += oddRowHtml;
		
		for(i=0;i<length;i++){
			rowHtml += generateTile(4);
		}
		
	}
	rowHtml += '</ul>';
	return rowHtml;
}

function generateHexGrid(height, width) {
    var odd = true; 
    var hexGrid = $('#board-container');

    console.log('entered');
    
        $('#board-container').append(rowFactory(false, width));
        $('#board-container').append(rowFactory(true, width));
        $('#board-container').append(rowFactory(false, width));
        $('#board-container').append(rowFactory(true, width));
        $('#board-container').append(rowFactory(false, width));
        $('#board-container').append(rowFactory(true, width));
        $('#board-container').append(rowFactory(false, width));
        $('#board-container').append(rowFactory(true, width));
        $('#board-container').append(rowFactory(false, width));
        $('#board-container').append(rowFactory(true, width));
        $('#board-container').append(rowFactory(false, width));
}


$(function ()  {
    
    var gridHeight = 10;
    var gridWidth = 10;

    generateHexGrid(gridHeight, gridWidth);
        
    
    
   

    
    

    
});
