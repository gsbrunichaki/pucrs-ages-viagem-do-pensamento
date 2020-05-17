import Schema from "../lib/schema"
import DateLib from "../lib/date"

export default new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    childrenName: { type: String, required: true },
    childrenBirthday: { type: String, required: true, set: (value) => {
        return DateLib.dmY2Ymd(DateLib.formatDate(value))
    } },
    deleted: { type: Boolean, default: false, required: true }
})