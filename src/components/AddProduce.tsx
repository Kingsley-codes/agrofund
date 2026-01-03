// components/NewOpportunityModal.tsx
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { MdDriveFolderUpload } from "react-icons/md";

interface NewOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewOpportunityModal({
  isOpen,
  onClose,
}: NewOpportunityModalProps) {
  const [formData, setFormData] = useState({
    projectName: "",
    produceName: "",
    description: "",
    roi: "",
    minimum: "",
    term: "",
    location: "",
    images: [] as File[],
  });

  if (!isOpen) return null;

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImages = [...formData.images];
      newImages[index] = file;
      setFormData({ ...formData, images: newImages });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                New Project
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                Create a new project vehicle for remote farmers join
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            >
              <IoIosClose className="h-7 w-7 bg-red-500 text-white rounded-md hover:bg-red-600" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Project Name
                    </label>
                    <input
                      type="text"
                      value={formData.projectName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectName: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="e.g., Solar Farm Project"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Produce Name
                    </label>
                    <input
                      type="text"
                      value={formData.produceName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          produceName: e.target.value,
                        })
                      }
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="e.g., 12.5"
                      step="0.1"
                      required
                    />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    rows={3}
                    placeholder="Describe the investment opportunity..."
                    required
                  />
                </div>
              </div>

              {/* Investment Details */}
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                  Investment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Minimum Investment ($)
                    </label>
                    <input
                      type="number"
                      value={formData.minimum}
                      onChange={(e) =>
                        setFormData({ ...formData, minimum: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="e.g., 5000"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Expected ROI (%)
                    </label>
                    <input
                      type="number"
                      value={formData.roi}
                      onChange={(e) =>
                        setFormData({ ...formData, roi: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="e.g., 12.5"
                      step="0.1"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Investment Term (months)
                    </label>
                    <input
                      type="number"
                      value={formData.term}
                      onChange={(e) =>
                        setFormData({ ...formData, term: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="e.g., 24"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                      placeholder="e.g., California, USA"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Image Upload Section */}
              <div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                  Upload Images (Up to 3)
                </h3>
                <div className="flex gap-4">
                  {[0, 1, 2].map((index) => (
                    <div key={index} className="flex flex-col items-center">
                      <label className="cursor-pointer">
                        <div className="w-24 h-24 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center hover:border-primary dark:hover:border-blue-500 transition-colors">
                          {formData.images[index] ? (
                            <div className="relative w-full h-full">
                              <img
                                src={URL.createObjectURL(
                                  formData.images[index]
                                )}
                                alt={`Upload ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg"
                              />
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newImages = [...formData.images];
                                  newImages.splice(index, 1);
                                  setFormData({
                                    ...formData,
                                    images: newImages,
                                  });
                                }}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                              >
                                <IoIosClose className="h-4 w-4 bg-red-500 text-white rounded-md hover:bg-red-600" />
                              </button>
                            </div>
                          ) : (
                            <MdDriveFolderUpload className="w-12 h-12 font-light text-gray-600" />
                          )}
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, index)}
                          className="hidden"
                        />
                      </label>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                        Image {index + 1}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Upload up to 3 images to showcase your investment opportunity
                </p>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border dark:border-slate-600 rounded-lg text-slate-100 bg-red-500 dark:text-slate-300 hover:bg-red-600 dark:hover:bg-slate-700 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
              >
                Create Opportunity
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
