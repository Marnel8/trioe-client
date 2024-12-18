"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Upload, X, Video } from "lucide-react";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ACCEPTED_VIDEO_TYPES = ["video/mp4", "video/webm", "video/ogg"];

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Project title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Project description must be at least 10 characters.",
  }),
  category: z.string({
    required_error: "Please select a project category.",
  }),
  components: z.string().min(2, {
    message: "Please list the components used.",
  }),
  instructions: z.string().min(10, {
    message: "Please provide assembly/usage instructions.",
  }),
  images: z
    .array(
      z
        .any()
        .refine(
          (file) => file?.size <= MAX_FILE_SIZE,
          `Max image size is 50MB.`
        )
        .refine(
          (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
          "Only .jpg, .png, and .webp formats are supported."
        )
    )
    .max(5, "You can upload up to 5 images"),
  video: z
    .any()
    .refine(
      (file) => !file || file?.size <= MAX_FILE_SIZE,
      `Max video size is 50MB.`
    )
    .refine(
      (file) => !file || ACCEPTED_VIDEO_TYPES.includes(file?.type),
      "Only .mp4, .webm, and .ogg formats are supported."
    )
    .optional(),
});

export function AddProjectDialog() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      components: "",
      instructions: "",
      images: [],
      video: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#4285f4] hover:bg-[#3367d6] text-white">
          Add Yours
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl overflow-y-auto max-h-screen">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold">
            Add Your Project
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Share your TRIOE board project with the community. Fill out the
            details below.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your project title"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="steam">STEAM</SelectItem>
                        <SelectItem value="robotics">Robotics</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="programming">Programming</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your project"
                      className="resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="components"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Components Used</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List the components and materials used"
                      className="resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs sm:text-sm">
                    List all TRIOE board components and additional materials
                    needed
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instructions</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide step-by-step instructions"
                      className="resize-none min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs sm:text-sm">
                    Include assembly instructions and how to use the project
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Images</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="image-upload"
                          className="flex flex-col items-center justify-center w-full h-24 sm:h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 text-gray-500 dark:text-gray-400" />
                            <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              PNG, JPG or WEBP (MAX. 50MB)
                            </p>
                          </div>
                          <Input
                            id="image-upload"
                            type="file"
                            accept={ACCEPTED_IMAGE_TYPES.join(",")}
                            multiple
                            className="hidden"
                            onChange={(e) => {
                              const files = Array.from(e.target.files || []);
                              field.onChange([...field.value, ...files]);
                            }}
                          />
                        </label>
                      </div>
                      {field.value.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                          {field.value.map((file: File, index: number) => (
                            <div key={index} className="relative group">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Uploaded image ${index + 1}`}
                                className="w-full h-20 sm:h-24 object-cover rounded"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const newFiles = [...field.value];
                                  newFiles.splice(index, 1);
                                  field.onChange(newFiles);
                                }}
                                className="absolute top-0 right-0 hidden group-hover:flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full"
                              >
                                <X size={12} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormDescription className="text-xs sm:text-sm">
                    Upload up to 5 images (max 50MB each)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="video"
              render={({ field: { value, onChange, ...field } }) => (
                <FormItem>
                  <FormLabel>Project Video</FormLabel>
                  <FormControl>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="video-upload"
                          className="flex flex-col items-center justify-center w-full h-24 sm:h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Video className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 text-gray-500 dark:text-gray-400" />
                            <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              MP4, WEBM or OGG (MAX. 50MB)
                            </p>
                          </div>
                          <Input
                            id="video-upload"
                            type="file"
                            accept={ACCEPTED_VIDEO_TYPES.join(",")}
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              onChange(file);
                            }}
                            {...field}
                          />
                        </label>
                      </div>
                      {value && (
                        <div className="relative">
                          <video
                            src={URL.createObjectURL(value)}
                            controls
                            className="w-full rounded"
                          />
                          <button
                            type="button"
                            onClick={() => onChange(undefined)}
                            className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormDescription className="text-xs sm:text-sm">
                    Upload one video (max 50MB)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="sm:justify-end">
              <Button
                type="submit"
                className="w-full sm:w-auto bg-[#4285f4] hover:bg-[#3367d6]"
              >
                Submit Project
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
