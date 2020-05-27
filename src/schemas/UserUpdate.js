import Schema from "../lib/schema"
import DateLib from "../lib/date"

export default new Schema({
    name: { type: String  },
    childrenName: { type: String  },
    childrenBirthday: { type: String, set: (value) => {
        return DateLib.dmY2Ymd(DateLib.formatDate(value))
    } },
    childrenGender: { type: String  },
    deleted: { type: Boolean, default: false  }
})