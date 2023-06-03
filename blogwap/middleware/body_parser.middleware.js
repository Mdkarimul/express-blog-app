const body_parser = require("body-parser");
const urlEncoder = body_parser.urlencoded({extended:false});
const json_encoder = body_parser.json();

module.exports = {
    urlEncoder : urlEncoder,
    json_encoder : json_encoder
};