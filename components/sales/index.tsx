import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

export default function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Novos Clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>
          Clientes cadastrados nas últimas 24 horas
        </CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://avatars.githubusercontent.com/u/55541385?v=4" />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Gustavo Hennings</p>
            <span className="text-[12px] sm:text-sm">gustavoh@email.com</span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://avatars.githubusercontent.com/u/55541385?v=4" />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Gustavo Hennings</p>
            <span className="text-[12px] sm:text-sm">gustavoh@email.com</span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://avatars.githubusercontent.com/u/55541385?v=4" />
            <AvatarFallback>GH</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Gustavo Hennings</p>
            <span className="text-[12px] sm:text-sm">gustavoh@email.com</span>
          </div>
        </article>
      </CardContent>
    </Card>
  )
}