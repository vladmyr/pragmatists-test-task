import { Model } from "backbone";

let User = Model.extend({
    idAttribute: "id",
    urlRoot: "/users"
});

export default User;
export const id = "User";