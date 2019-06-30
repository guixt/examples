function html_to_guixt(ie)
{

    // obtain status object from HTML page
    var status = ie.document.parentWindow.return_status();

    // Set GuiXT variable for each status property
    for (var prop in status) 
    {
        guixt.Set("status_" + prop, status[prop]);
    };
};
