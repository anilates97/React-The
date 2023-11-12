import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;
    console.log(value);

    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          defaultValue={minBookingLength}
          id="min-nights"
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          defaultValue={maxBookingLength}
          id="max-nights"
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          defaultValue={maxGuestsPerBooking}
          id="max-guests"
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          defaultValue={breakfastPrice}
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
