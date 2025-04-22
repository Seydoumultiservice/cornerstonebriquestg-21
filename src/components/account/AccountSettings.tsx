
import { Button } from "@/components/ui/button";

const AccountSettings = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">Notifications par email</h3>
          <p className="text-sm text-gray-500">Recevez des notifications par email sur vos commandes</p>
        </div>
        <Button variant="outline" size="sm">Configurer</Button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">Notifications par SMS</h3>
          <p className="text-sm text-gray-500">Recevez des notifications par SMS sur vos commandes</p>
        </div>
        <Button variant="outline" size="sm">Configurer</Button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium">Supprimer mon compte</h3>
          <p className="text-sm text-gray-500">Supprimer définitivement votre compte et toutes vos données</p>
        </div>
        <Button variant="destructive" size="sm">Supprimer</Button>
      </div>
    </div>
  );
};

export default AccountSettings;
