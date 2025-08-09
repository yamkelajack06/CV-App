import FormsTabs from "./FormsTabs";
import Input, {TextArea} from "./Input";


export default function GeneralForm({change}) {
    return (
        <form action = "#" id = "general-info">
            <FormsTabs/>
            <Input change = {change} label = "firstName" type = "text"/>
            <Input change = {change} label = "lastName" type = "text"/> 
            <Input change = {change} label = "address" type = "text"/> 
            <Input change = {change} label = "phone" type = "tel"/>
            <Input change = {change} label = "email" type = "email"/>   
            <TextArea change = {change}  label = "summary" />
        </form>
    )
};
