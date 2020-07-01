import React from "react"

const Form1 = props => {
    return (
        <>
            <div className="container">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <h1 class="ml-3">Porfolio</h1>
                            <div class="card-header">
                                <h3>Payment form example</h3>
                            </div>

                            <div class="card-body">
                                <div class="form-row">
                                    <div class="form-group col-md-5">
                                        <label for="Card">Card #</label>
                                        <input type="password" class="form-control" id="" placeholder="XXXXXX" />
                                    </div>
                                    <div class="form-group col-md-3">
                                        <label for="CVC">CVC #</label>
                                        <input type="number" class="form-control" id="" placeholder="0000000" />
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="Amount">Amount</label>
                                        <input type="number" class="form-control" id="" placeholder="Amount" />
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="First-name">First name</label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="Last-name">Last name</label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="City">City</label>
                                    <input type="text" class="form-control" id="" />
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="inputState">State</label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Pick a State...</option>
                                        <option>New York</option>
                                        <option>Oregon</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="Postal-code">Postal code</label>
                                    <input type="number" class="form-control" id="" />
                                </div>
                            </div>

                            <div class="form-row">
                            <div class="form-group col-md-6">



                        </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form1