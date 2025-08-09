import FormsTabs from "./FormsTabs";
import Input, {TextArea} from "./Input";


export default function GeneralForm() {
    return (
        <form action = "#" id = "general-info">
            <FormsTabs/>
            <Input label = "First Name: " type = "text"/>
            <Input label = "Last Name: " type = "text"/> 
            <Input label = "Phone: " type = "tel"/>
            <Input label = "Email: " type = "email"/>   
            <Input label = "Address" type = "text"/> 
            <TextArea label = "Professional summary" />
        </form>
    )
};
