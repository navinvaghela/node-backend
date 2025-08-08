class ApiError extends Error {
    constructor(
        statusCode,
        messsage = "Something went wrong",
        errors = [],
        stack = "",
    ) {
        super(messsage)
        this.status = statusCode
        this.message =  messsage
        this.success =  false
        this.errors = errors
        this.data = null

        if(stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }