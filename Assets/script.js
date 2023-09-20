
$(function () {
 
  $(".container").on("click", ".save-button", function () {
     
      const hourId = $(this).closest(".time-block").attr("id");

      const description = $(this).siblings(".description").val();


      localStorage.setItem(hourId, description);

    });
      

      $(function () {
     
        $(".saveBtn").on("click", function () {
         
          const hourId = $(this).parent().attr("id");
         
          const description = $(this).siblings(".description").val();
    
          localStorage.setItem(hourId, description);
      
          console.log(`Saved in localStorage: Key - ${hourId}, Value - ${description}`);
        });
     
      });
      
    



  function updateBlockColors() {
      const currentHour = dayjs().hour();

      $(".time-block").each(function () {
          const blockHour = parseInt($(this).attr("id").split("-")[1]);
          $(this).removeClass("past present future");

          if (blockHour < currentHour) {
              $(this).addClass("past");
          } else if (blockHour === currentHour) {
              $(this).addClass("present");
          } else {
              $(this).addClass("future");
          }
      });
  }


  function loadSavedEvents() {
      $(".time-block").each(function () {
          const hourId = $(this).attr("id");
          const savedDescription = localStorage.getItem(hourId);
          $(this).find(".description").val(savedDescription);
      });
  }


  function displayCurrentDate() {
      const currentDate = dayjs().format("dddd, MMMM D, YYYY");
      $("#currentDay").text(currentDate);
  }

  displayCurrentDate();
  updateBlockColors();
  loadSavedEvents();
});
