
// This function will show the payment in dialog box after calculate all ready
function show_dialog(){
    Swal.fire(
      'Well Done!',
      'Your current course are Successfully paid automatically to our account!! Thanks for your trust and belief on our YoungSci Cambodia Education',
      'success'
    )
 }

// This function will show the remove dialog box after click remove
function click_remove(){
    Swal.fire({
    title: 'Are you sure?',
    text: "This Course Will Be Delete Automatically!!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your current course pick up has been deleted',
          'success'
        )
      }
    })
}


// This function will show the save dialog after clicking save later
function save(){
  Swal.fire({
    title: 'Do you want to save this course for later?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Your current course is saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
}

