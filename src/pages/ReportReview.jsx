import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from "../components/buttons/Button";
import FormInput from "../components/inputs/FormInput";
import BttnwithIcon from '../components/buttons/BttnwithIcon';
import Plus from "../assets/icons/Plus";
import FormTHead from '../components/tables/FormTHead';
import FormTH from '../components/tables/FormTH';
import FormTBody from '../components/tables/FormTBody';
import FormTD from '../components/tables/FormTD';
import FormTextarea from '../components/inputs/FormTextarea';
import FormCheck from '../components/checkboxes/FormCheck';
import Ex from '../assets/icons/Ex';
import PfpLabel from '../components/PfpLabel';

export default function ReportReview() {
    const location = useLocation();
    const {state} = useLocation();
    const [report, setReport] = useState({});
    const [reportLoad, setReportLoad] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8000/api/report/${state.id}`)
        .then(response => response.json())
        .then(data => {
            setReport(data);
            setReportLoad(false);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        })
    }, [state.id]);

    return (
        <div className="overflow-y-auto overflow-x-hidden justify-items-center items-center fixed bg-gray-400 p-4 dark:bg-gray-700 top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div className="relative p-4 w-full max-w-5xl h-full md:h-auto">
                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5 border border-gray-500">
                    <div className="flex justify-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">CREDIT INVESTIGATION REPORT</h3>
                    </div>
                    {reportLoad ? '' : (
                        <form>
                            <img src={`http://127.0.0.1:8000/storage/${state.id_pic}`} className="rounded rounded-lg w-28" />
                            <div className="grid gap-4 mb-4 sm:grid-cols-3 pb-2 border-b dark:border-gray-500">
                                <PfpLabel caption="Applicant Name" label={`${state.first_name} ${state.last_name}`} />
                                <FormInput label="Date of Birth" type="date" name="birth_day" id="bday" value={state.birth_day} disable={true} />
                                <FormInput label="Place of Birth" type="text" name="birth_place" id="bplace" value={state.birth_place} placeholder="Birth place address" disable={true} />
                            </div>
                                    
                            <h3 className="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Father:</h3>
                            <div className="grid gap-4 mb-4 sm:grid-cols-3 pb-2">
                                <FormInput label="First name" type="text" name="father_first" id="ff-name" value={state.father_first} placeholder="Type first name here" disable={true} />
                                <FormInput label="Middle name" type="text" name="father_middle" id="fm-name" value={state.father_middle} placeholder="Type middle name here" disable={true} />
                                <FormInput label="Last name" type="text" name="father_last" id="fl-name" value={state.father_last} placeholder="Type last name here" disable={true} />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Mother:</h3>
                            <div className="grid gap-4 mb-4 sm:grid-cols-3 pb-2 border-b dark:border-gray-500">
                                <FormInput label="First name" type="text" name="mother_first" id="mf-name" value={state.mother_first} placeholder="Type first name here" disable={true} />
                                <FormInput label="Middle name" type="text" name="mother_middle" id="mm-name" value={state.mother_middle} placeholder="Type middle name here" disable={true} />
                                <FormInput label="Last name" type="text" name="mother_last" id="ml-name" value={state.mother_last} placeholder="Type last name here" disable={true} />
                            </div>
                                                
                            <h3 className="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Dependants:</h3>
                            <div className="grid gap-4 mb-4 sm:grid-cols-1 pb-2 border-b dark:border-gray-500">
                                <table className="w-full">
                                    <FormTHead>
                                        <FormTH label="Name" />
                                        <FormTH label="Relationship" />
                                        <FormTH label="Age" />
                                        <FormTH label="School" />
                                    </FormTHead>
                                    <FormTBody>
                                        <FormTD placeholder="Full name here" />
                                        <FormTD placeholder="Address here" />
                                        <FormTD placeholder="Cellphone number" />
                                        <FormTD placeholder="School name" />
                                    </FormTBody>
                                </table>
                                {location.pathname !== '/ci/review' ? (
                                    <div className="grid pt-4 sm:cols-span-1">
                                        <BttnwithIcon text="Add row">
                                            <Plus />
                                        </BttnwithIcon>
                                    </div>
                                ) : ''}
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Nearest Relatives:</h3>
                            <div className="grid gap-4 mb-4 sm:grid-cols-1 pb-2 border-b dark:border-gray-500">
                                <table className="w-full">
                                    <FormTHead>
                                        <FormTH label="Name" />
                                        <FormTH label="Relationship" />
                                        <FormTH label="Age" />
                                        <FormTH label="School" />
                                    </FormTHead>
                                    <FormTBody>
                                        <FormTD placeholder="Full name here" />
                                        <FormTD placeholder="Address here" />
                                        <FormTD placeholder="Cellphone number" />
                                        <FormTD placeholder="School name" />
                                    </FormTBody>
                                </table>
                                {location.pathname !== '/ci/review' ? (
                                    <div className="grid pt-4 sm:cols-span-1">
                                        <BttnwithIcon text="Add row">
                                            <Plus />
                                        </BttnwithIcon>
                                    </div>
                                ) : ''}
                            </div>

                            <div className="grid gap-4 mb-4 sm:grid-cols-2 pb-2 border-b dark:border-gray-500">
                                <FormTextarea name="comm_standing" id="comm_standing" label="Community Standing" value={state.comm_standing} placeholder="Write commuity standing here" disable={true} />
                                <FormTextarea name="home_description" id="home_description" label="Brief description of place of residence and home" value={state.home_description} placeholder="Write residence description here" disable={true} />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Unit Applied:</h3>
                            <div className="grid gap-4 mb-4 sm:grid-cols-1 pb-2 border-b dark:border-gray-500">
                                <table className="w-full">
                                    <FormTHead>
                                        <FormTH label="Model" />
                                        <FormTH label="Downpayment" />
                                        <FormTH label="Terms Conditions" />
                                    </FormTHead>
                                    <FormTBody>
                                        <FormTD placeholder="Model name" />
                                        <FormTD placeholder="Downpayment here" />
                                        <FormTD placeholder="Terms & Conditions" />
                                    </FormTBody>
                                </table>
                                {location.pathname !== '/ci/review' ? (
                                    <div className="grid pt-4 sm:cols-span-1">
                                        <BttnwithIcon text="Add row">
                                            <Plus />
                                        </BttnwithIcon>
                                    </div>
                                ) : ''}
                            </div>
                                    
                            <h3 className="text-lg font-semibold text-gray-900 pb-3 dark:text-white">RECOMMENDATION:</h3>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2 pb-2 border-b dark:border-gray-500">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject is recommended for</label>
                                    <div className="space-y-4 sm:flex sm:space-y-0">
                                        <FormCheck name="recommendation" type="radio" id="recomm-1" label="Approval" value="approval" check={report.recommendation === 'approval'} disable={true} />
                                        <FormCheck name="recommendation" type="radio" id="recomm-2" label="Disapproval" value="disapproval" check={report.recommendation === 'disapproval'} disable={true} />
                                    </div>
                                </div>
                                <FormTextarea name="remarks" id="remarks" label="Other remarks" placeholder="Write remarks here" disable={true} />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Unit verification:</h3>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sketch:</label>
                            <div className="w-full justify-items-center">
                                <img src={`http://127.0.0.1:8000/storage/${state.sketch}`} onClick={() => document.getElementById('imageModal').style.display = 'block'}
                                className="rounded rounded-lg w-1/2 p-3 my-2 rounded-lg hover:bg-gray-100 hover:opacity-80 active:opacity-100 active:bg-gray-200" />
                            </div>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2 pb-2 border-b dark:border-gray-500">
                                <FormInput label="First Unit applied" type="text" name="first_unit" id="name" value={report.first_unit} placeholder="Type unit name here" disable={true} />
                                {/* {location.pathname !== '/ci/review' ? (
                                    <FileInput label="Sketch Image" name="sketch" type="img" />
                                ) : (
                                    <img src={`http://127.0.0.1:8000/storage/${state.sketch}`} className="rounded rounded-lg w-20" />
                                )} */}
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Delivered?</label>
                                    <div className="space-y-4 sm:flex sm:space-y-0">
                                        <FormCheck name="delivered" type="radio" id="deliver-1" label="Yes" value="yes" check={report.delivered === 'yes'} disable={true} />
                                        <FormCheck name="delivered" type="radio" id="deliver-2" label="No" value="no" check={report.delivered === 'no'} disable={true} />
                                    </div>
                                </div>
                                <FormInput label="Outlet" type="text" name="outlet" id="outlet" value={report.outlet} placeholder="Type outlet here" disable={true} />
                            </div>
                        </form>
                    )}
                </div>
            </div>
            <div id="imageModal" className="fixed hidden top-0 left-0 right-0 z-50 p-20 bg-gray-500 bg-opacity-30 justify-items-center items-center overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full h-auto max-w-3xl max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 border dark:border-gray-500">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="delete-modal"
                            onClick={() => document.getElementById('imageModal').style.display = "none"}>
                            <Ex className="w-5 h-5" />
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-6 text-center">
                            <img src={`http://127.0.0.1:8000/storage/${state.sketch}`} className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}