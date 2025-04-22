
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileForm from "./ProfileForm";
import PasswordForm from "./PasswordForm";

const ProfileContent = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Informations Personnelles</CardTitle>
          <CardDescription>
            Mettez à jour vos informations personnelles ici.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProfileForm />
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Sécurité</CardTitle>
          <CardDescription>
            Mettez à jour votre mot de passe.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <PasswordForm />
        </CardContent>
      </Card>
    </>
  );
};

export default ProfileContent;
