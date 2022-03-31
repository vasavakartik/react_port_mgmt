import React from 'react'

const Signup = () => {
  return (
    <div>
       <h1>Ragister </h1>

<form>
  <div class="form-group ">
    <label for="text1" class="col-4 col-form-label">FirstName</label> 
    <div class="col-8">
      <input id="text1" name="text1" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group ">
    <label for="text2" class="col-4 col-form-label">Email Address</label> 
    <div class="col-8">
      <input id="text2" name="text2" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group ">
    <label for="text" class="col-4 col-form-label">LastName</label> 
    <div class="col-8">
      <input id="text" name="text" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group ">
    <label for="text4" class="col-4 col-form-label">Phone no</label> 
    <div class="col-8">
      <input id="text4" name="text4" type="text" class="form-control"/>
    </div>
  </div>
  <div class="form-group ">
    <label for="text3" class="col-4 col-form-label">Password</label> 
    <div class="col-8">
      <input id="text3" name="text3" type="text" class="form-control"/>
    </div>
  </div> 
  <div class="form-group ">
    <label for="text3" class="col-4 col-form-label">Role</label> 
    <div class="col-8">
      <input id="text3" name="text3" type="text" class="form-control"/>
    </div>
  </div> 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup