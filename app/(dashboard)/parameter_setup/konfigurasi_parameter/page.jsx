"use client";
import ExampleOne from "@/components/partials/table/ExampleOne";
import ExampleTwo from "@/components/partials/table/ExampleTwo";

const TableAdvancedPage = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="Horizontal Form">
        <div className="space-y-4">
          <Textinput
            label="Full name"
            id="h_Fullname"
            type="text"
            placeholder="Full name"
            horizontal
          />
          <Textinput
            label="Email"
            id="h_email"
            type="email"
            placeholder="Type your email"
            horizontal
          />
          <Textinput
            label="Phone"
            id="h_phone"
            type="phone"
            placeholder="Type your email"
            horizontal
          />
          <Textinput
            label="Password"
            id="h_password"
            type="Password"
            placeholder="8+ characters, 1 capitat letter "
            horizontal
          />
          <div className="ml-[124px] space-y-4">
            <Checkbox
              label="Remember me"
              value={checked}
              onChange={() => setChecked(!checked)}
            />
            <Button text="Submit" className="btn-dark" />
          </div>
        </div>
      </Card>
      </div>
      <div className=" space-y-5">
        <ExampleOne />
        <ExampleTwo />
      </div>
    </div>
  );
};

export default TableAdvancedPage;
