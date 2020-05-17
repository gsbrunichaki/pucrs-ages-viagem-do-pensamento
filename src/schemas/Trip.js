import Schema from "../lib/schema"
import DateLib from "../lib/date"
import moment from "moment";

export default new Schema({
    id: { type: String },
    aircraft: { type: String, required: true },
    thoughts: { type: [], required: true },
    island: { type: String, required: true },
    behaviour: { type: String, required: true },
    autoAnalysis: { type: Boolean, required: true },

    createDate: {
        type: String, required: true, 
        default: moment(),
        set: (value) => {
            return DateLib.dmY2Ymd(DateLib.formatDate(value))
        }
    },
    deleted: { type: Boolean, default: false, required: true }
});