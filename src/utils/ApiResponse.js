class ApiResponse {
    constructor(
        statusCode,
        data, 
        messsage = "Success",
    ) {
        this.data = data
        this.status = statusCode
        this.message =  messsage
        this.success =  statusCode < 400
    }
}

export { ApiResponse }