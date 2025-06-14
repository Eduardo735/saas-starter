import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

type MenuProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  // header?: React.ReactNode;
  footer?: React.ReactNode;
  description?: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function MenuSheet({
  // children,
  // variant = "primary",
  // onClick,
  icon,
  footer,
  // header,
  children,
  description,
  title = "Title",
}: MenuProps) {
  return (
    <Sheet>
      <SheetTrigger>{icon ? icon : "Open"}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
          {children}
        </SheetHeader>
        <SheetFooter>
          {footer}
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
      {/* <SheetFooter>
        <SheetDescription>Color</SheetDescription>
      </SheetFooter> */}
    </Sheet>
  );
}
