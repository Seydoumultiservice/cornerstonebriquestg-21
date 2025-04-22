
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AccountSettings from "./AccountSettings";

const SettingsContent = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Paramètres</CardTitle>
        <CardDescription>
          Gérez les paramètres de votre compte.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AccountSettings />
      </CardContent>
    </Card>
  );
};

export default SettingsContent;
