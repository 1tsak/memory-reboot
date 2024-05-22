import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function ShowAlert({type,title,des}:any) {
  return (
    <Alert variant={type}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {des}
      </AlertDescription>
    </Alert>
  )
}
