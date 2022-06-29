var httpCommons = {
    status: {
        // ## Informational 1xx
        // Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.

        // 100 - The server has received the request headers and the client should proceed to send the request body.
        CONTINUE: 100,

        // 101 - The requester has asked the server to switch protocols and the server has agreed to do so.
        SWITCHING_PROTOCOLS: 101,

        // 102 - A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.
        PROCESSING: 102,

        // 103 - Used to return some response headers before final HTTP message.
        EARLY_HINTS: 103,

        // ## Successful 2xx
        // Indicates that the client's request was successfully received, understood, and accepted.

        // 200 - Standard response for successful HTTP requests.
        OK: 200,

        // 201 - The request has been fulfilled, resulting in the creation of a new resource.
        CREATED: 201,

        // 202 - The request has been accepted for processing, but the processing has not been completed.
        ACCEPTED: 202,

        // 203 - The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.
        NON_AUTHORITATIVE_INFORMATION: 203,

        // 204 - The server successfully processed the request and is not returning any content.
        NO_CONTENT: 204,

        // 205 - The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.
        RESET_CONTENT: 205,

        // 206 - The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
        PARTIAL_CONTENT: 206,

        // 207 - The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
        MULTI_STATUS: 207,

        // 208 - The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.
        ALREADY_REPORTED: 208,

        // 226 - The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
        IM_USED: 226,

        // ## Redirection 3xx
        // Indicates that further action needs to be taken by the user agent in order to fulfill the request.

        // 300 - Indicates multiple options for the resource from which the client may choose.
        MULTIPLE_CHOICES: 300,

        // 301 - This and all future requests should be directed to the given URI.
        MOVED_PERMANENTLY: 301,

        // 302 - This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.
        FOUND: 302,

        // 303 - The response to the request can be found under another URI using the GET method.
        SEE_OTHER: 303,

        // 304 - Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
        NOT_MODIFIED: 304,

        // 305 - The requested resource is available only through a proxy, the address for which is provided in the response.
        USE_PROXY: 305,

        // 306 - No longer used. Originally meant "Subsequent requests should use the specified proxy.
        SWITCH_PROXY: 306,

        // 307 - In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
        TEMPORARY_REDIRECT: 307,

        // 308 - The request and all future requests should be repeated using another URI.
        PERMANENT_REDIRECT: 308,

        // ## Client Error 4xx
        // Indicates that the client seems to have erred.

        // 400 - The server cannot or will not process the request due to an apparent client error.
        BAD_REQUEST: 400,

        // 401 - Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.
        UNAUTHORIZED: 401,

        // 402 - Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.
        PAYMENT_REQUIRED: 402,

        // 403 - The request was valid, but the server is refusing action.
        FORBIDDEN: 403,

        // 404 - The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
        NOT_FOUND: 404,

        // 405 - A request method is not supported for the requested resource.
        METHOD_NOT_ALLOWED: 405,

        // 406 - The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
        NOT_ACCEPTABLE: 406,

        // 407 - The client must first authenticate itself with the proxy.
        PROXY_AUTHENTICATION_REQUIRED: 407,

        // 408 - The server timed out waiting for the request.
        REQUEST_TIMEOUT: 408,

        // 409 - Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.
        CONFLICT: 409,

        // 410 - Indicates that the resource requested is no longer available and will not be available again.
        GONE: 410,

        // 411 - The request did not specify the length of its content, which is required by the requested resource.
        LENGTH_REQUIRED: 411,

        // 412 - The server does not meet one of the preconditions that the requester put on the request.
        PRECONDITION_FAILED: 412,

        // 413 - The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".
        REQUEST_ENTITY_TOO_LARGE: 413,

        // 414 - The URI provided was too long for the server to process.
        REQUEST_URI_TOO_LONG: 414,

        // 415 - The request entity has a media type which the server or resource does not support.
        UNSUPPORTED_MEDIA_TYPE: 415,

        // 416 - The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
        REQUESTED_RANGE_NOT_SATISFIABLE: 416,

        // 417 - The server cannot meet the requirements of the Expect request-header field.
        EXPECTATION_FAILED: 417,

        // 418 - Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout. This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.
        IM_A_TEAPOT: 418,

        // 421 - The request was directed at a server that is not able to produce a response.
        MISDIRECTED_REQUEST: 421,

        // 422 - The request was well-formed but was unable to be followed due to semantic errors.
        UNPROCESSABLE_ENTITY: 422,

        // 423 - The resource that is being accessed is locked.
        LOCKED: 423,

        // 424 - The request failed because it depended on another request and that request failed.
        FAILED_DEPENDENCY: 424,

        // 426 - The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
        UPGRADE_REQUIRED: 426,

        // 428 - The origin server requires the request to be conditional.
        PRECONDITION_REQUIRED: 428,

        // 429 - The user has sent too many requests in a given amount of time.
        TOO_MANY_REQUESTS: 429,

        // 431 - The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.
        REQUEST_HEADER_FIELDS_TOO_LARGE: 431,

        // 451 - A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.
        UNAVAILABLE_FOR_LEGAL_REASONS: 451,

        // ## Server Error 5xx
        // Indicates that the server is aware that it has erred or is incapable of performing the requested method.

        // 500 - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
        INTERNAL_SERVER_ERROR: 500,

        // 501 - The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.
        NOT_IMPLEMENTED: 501,

        // 502 - The server was acting as a gateway or proxy and received an invalid response from the upstream server.
        BAD_GATEWAY: 502,

        // 503 - The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
        SERVICE_UNAVAILABLE: 503,

        // 504 - The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
        GATEWAY_TIMEOUT: 504,

        // 505 - The server does not support the HTTP protocol version used in the request.
        HTTP_VERSION_NOT_SUPPORTED: 505,

        // 506 - Transparent content negotiation for the request results in a circular reference.
        VARIANT_ALSO_NEGOTIATES: 506,

        // 507 - The server is unable to store the representation needed to complete the request.
        INSUFFICIENT_STORAGE: 507,

        // 508 - The server detected an infinite loop while processing the request.
        LOOP_DETECTED: 508,

        // 510 - Further extensions to the request are required for the server to fulfil it.
        NOT_EXTENDED: 510,

        // 511 - The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.
        NETWORK_AUTHENTICATION_REQUIRED: 511
    },

    methods: {
        // The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
        GET: 'GET',

        // The HEAD method asks for a response identical to that of a GET request, but without the response body.
        HEAD: 'HEAD',

        // The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
        POST: 'POST',

        // The PUT method replaces all current representations of the target resource with the request payload.
        PUT: 'PUT',

        // The DELETE method deletes the specified resource.
        DEL: 'DELETE',

        // The TRACE method performs a message loop-back test along the path to the target resource.
        TRACE: 'TRACE',

        // The OPTIONS method is used to describe the communication options for the target resource.
        OPTIONS: 'OPTIONS',

        // The CONNECT method establishes a tunnel to the server identified by the target resource.
        CONNECT: 'CONNECT',

        // The PATCH method is used to apply partial modifications to a resource.
        PATCH: 'PATCH'
    }
};

httpCommons.arrays = {
    status: [
        httpCommons.status.CONTINUE,
        httpCommons.status.SWITCHING_PROTOCOLS,
        httpCommons.status.PROCESSING,
        httpCommons.status.EARLY_HINTS,
        httpCommons.status.OK,
        httpCommons.status.CREATED,
        httpCommons.status.ACCEPTED,
        httpCommons.status.NON_AUTHORITATIVE_INFORMATION,
        httpCommons.status.NO_CONTENT,
        httpCommons.status.RESET_CONTENT,
        httpCommons.status.PARTIAL_CONTENT,
        httpCommons.status.MULTI_STATUS,
        httpCommons.status.ALREADY_REPORTED,
        httpCommons.status.IM_USED,
        httpCommons.status.MULTIPLE_CHOICES,
        httpCommons.status.MOVED_PERMANENTLY,
        httpCommons.status.FOUND,
        httpCommons.status.SEE_OTHER,
        httpCommons.status.NOT_MODIFIED,
        httpCommons.status.USE_PROXY,
        httpCommons.status.SWITCH_PROXY,
        httpCommons.status.TEMPORARY_REDIRECT,
        httpCommons.status.PERMANENT_REDIRECT,
        httpCommons.status.BAD_REQUEST,
        httpCommons.status.UNAUTHORIZED,
        httpCommons.status.PAYMENT_REQUIRED,
        httpCommons.status.FORBIDDEN,
        httpCommons.status.NOT_FOUND,
        httpCommons.status.METHOD_NOT_ALLOWED,
        httpCommons.status.NOT_ACCEPTABLE,
        httpCommons.status.PROXY_AUTHENTICATION_REQUIRED,
        httpCommons.status.REQUEST_TIMEOUT,
        httpCommons.status.CONFLICT,
        httpCommons.status.GONE,
        httpCommons.status.LENGTH_REQUIRED,
        httpCommons.status.PRECONDITION_FAILED,
        httpCommons.status.REQUEST_ENTITY_TOO_LARGE,
        httpCommons.status.REQUEST_URI_TOO_LONG,
        httpCommons.status.UNSUPPORTED_MEDIA_TYPE,
        httpCommons.status.REQUESTED_RANGE_NOT_SATISFIABLE,
        httpCommons.status.EXPECTATION_FAILED,
        httpCommons.status.IM_A_TEAPOT,
        httpCommons.status.MISDIRECTED_REQUEST,
        httpCommons.status.UNPROCESSABLE_ENTITY,
        httpCommons.status.LOCKED,
        httpCommons.status.FAILED_DEPENDENCY,
        httpCommons.status.UPGRADE_REQUIRED,
        httpCommons.status.PRECONDITION_REQUIRED,
        httpCommons.status.TOO_MANY_REQUESTS,
        httpCommons.status.REQUEST_HEADER_FIELDS_TOO_LARGE,
        httpCommons.status.UNAVAILABLE_FOR_LEGAL_REASONS,
        httpCommons.status.INTERNAL_SERVER_ERROR,
        httpCommons.status.NOT_IMPLEMENTED,
        httpCommons.status.BAD_GATEWAY,
        httpCommons.status.SERVICE_UNAVAILABLE,
        httpCommons.status.GATEWAY_TIMEOUT,
        httpCommons.status.HTTP_VERSION_NOT_SUPPORTED,
        httpCommons.status.VARIANT_ALSO_NEGOTIATES,
        httpCommons.status.INSUFFICIENT_STORAGE,
        httpCommons.status.LOOP_DETECTED,
        httpCommons.status.NOT_EXTENDED,
        httpCommons.status.NETWORK_AUTHENTICATION_REQUIRED
    ],

    methods: [
        httpCommons.methods.GET,
        httpCommons.methods.HEAD,
        httpCommons.methods.POST,
        httpCommons.methods.PUT,
        httpCommons.methods.DEL,
        httpCommons.methods.TRACE,
        httpCommons.methods.OPTIONS,
        httpCommons.methods.CONNECT,
        httpCommons.methods.PATCH
    ]
};

module.exports = httpCommons;
