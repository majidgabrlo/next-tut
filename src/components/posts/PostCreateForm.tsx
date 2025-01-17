"use client";
import * as actions from "@/app/actions";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../common/FormButton";
import { useFormState } from "react-dom";

const PostCreateForm = ({slug}:{slug:string}) => {
  const [formState, action] = useFormState(actions.createPost.bind(null,slug), { errors: {} });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState?.errors?.title}
              errorMessage={formState?.errors?.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              isInvalid={!!formState?.errors?.content}
              errorMessage={formState?.errors?.content?.join(", ")}
            />
            {formState.errors?._form ?? (
              <div className="text-red-500">
                {formState?.errors?._form?.join(", ")}
              </div>
            )}
            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostCreateForm;
