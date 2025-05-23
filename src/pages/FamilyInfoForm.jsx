import React from "react";
import {useOutletContext} from 'react-router-dom';
import FormInput from "../components/inputs/FormInput";
import FormSelect from "../components/inputs/FormSelect";
import FormCheck from "../components/checkboxes/FormCheck";
import BttnwithIcon from '../components/buttons/BttnwithIcon';
import Plus from "../assets/icons/Plus";
import FormTHead from '../components/tables/FormTHead';
import FormTH from '../components/tables/FormTH';
import FormTBody from '../components/tables/FormTBody';
import FormTD from '../components/tables/FormTD';

export default function FamilyInfoForm() {
    const {handleChange, applicant} = useOutletContext();

    return (
        <>
            <h3 class="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Family Information:</h3>
            <div class="grid gap-4 mb-4 sm:grid-cols-3 pb-2 border-b dark:border-gray-500">
                <FormInput label="Spouse name" type="text" name="spouse_name" id="spouse" value={applicant.spouse_name} onchange={handleChange} placeholder="Type full name" />
                <FormInput label="Date of Birth" type="date" name="b_date" id="b_date" value={applicant.b_date} onchange={handleChange} placeholder="" />
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Spouse Working?</label>
                    <div class="space-y-4 sm:flex sm:space-y-0">
                        <FormCheck name="spouse_work" id="inline-check" label="Yes" value="yes" check={applicant.spouse_work === 'yes'} change={handleChange} />
                        <FormCheck name="spouse_work" id="inline-2-check" label="No" value="no" check={applicant.spouse_work === 'no'} change={handleChange} />
                    </div>
                </div>
                {/* <FormInput label="Employer" type="text" name="prod_name" id="name" placeholder="Employer full name" /> */}
                <div class="grid gap-4 sm:col-span-2 md:gap-6 sm:grid-cols-3">
                    <FormInput label="Number of Children" type="text" name="children_num" id="children" value={applicant.children_num} onchange={handleChange} placeholder="0" />
                    <FormInput label="Dep. Children" type="text" name="children_dep" id="dep" value={applicant.children_dep} onchange={handleChange} placeholder="0" />
                    <FormSelect name="school" label="Schooling Children" id="school" value={applicant.school} onchange={handleChange}>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </FormSelect>
                </div>
            </div>
            
            <div class="grid gap-4 mb-4 sm:grid-cols-1 pb-2 border-b dark:border-gray-500">
                <div class="grid gap-4 sm:grid-cols-4">
                    <FormInput label="Name of Schooling Children" type="text" name="prod_name" id="name" placeholder="Full name here" />
                    <FormInput label="Age" type="number" name="prod_name" id="name" placeholder="" />
                    <FormInput label="Enrolled at" type="text" name="prod_name" id="name" placeholder="Type school here" />
                    <FormInput label="Address" type="text" name="prod_name" id="name" placeholder="Full address here" />
                </div>
                <div class="grid pt-4 sm:cols-span-3">
                    <BttnwithIcon text="Add row">
                        <Plus />
                    </BttnwithIcon>
                </div>
            </div>

            <h3 class="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Parent's Present Address:</h3>
            <div class="grid gap-4 mb-4 sm:grid-cols-3 pb-2">
                <FormSelect name="country" label="Country" id="country">
                    <option>Nigeria</option>
                    <option>Greece</option>
                    <option>USA</option>
                    <option>Philippines</option>
                    <option>Italy</option>
                    <option>Germany</option>
                    <option>Afganistan</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Bulgaria</option>
                    <option>Bahrain</option>
                    <option>Botswana</option>
                    <option>France</option>
                    <option>Great Britain</option>
                </FormSelect>
                <FormSelect name="region" label="Region" id="region">
                    <option>Region I</option>
                    <option>Region II</option>
                    <option>Region III</option>
                    <option>Region IV</option>
                    <option>Region V</option>
                    <option>Region VI</option>
                    <option>Region VII</option>
                    <option>Region VIII</option>
                    <option>Region IX</option>
                    <option>Region X</option>
                    <option>Region XI</option>
                    <option>Region XII</option>
                    <option>Region XIII</option>
                    <option>Region XIV</option>
                </FormSelect>
                <FormSelect name="province" label="Province" id="province">
                    <option>Zamboanga del norte</option>
                    <option>Zamboanga del sur</option>
                    <option>Zamboanga sibugay</option>
                    <option>Davao del norte</option>
                    <option>Davao del sur</option>
                    <option>Davao de oro(Compostela Valley)</option>
                    <option>Davao oriental</option>
                    <option>Davao Occidental</option>
                    <option>Cotabato</option>
                    <option>Sarangani</option>
                    <option>South Cotabato</option>
                </FormSelect>
                <FormSelect name="city" label="Municipality/City" id="city">
                    <option>Davao City</option>
                    <option>Panabo City</option>
                    <option>Tagum City</option>
                    <option>Samal Island</option>
                    <option>Digos City</option>
                    <option>Mati City</option>
                    <option>Talaingod</option>
                    <option>San Isidro</option>
                    <option>Carmen</option>
                    <option>Kapalong</option>
                    <option>New Corilla</option>
                    <option>Sto. Tomas</option>
                </FormSelect>
                <FormSelect name="brgy" label="Barangay" id="brgy">
                    <option>Baranggay I</option>
                    <option>Baranggay II</option>
                    <option>Baranggay III</option>
                    <option>Baranggay IV</option>
                    <option>Baranggay V</option>
                    <option>Baranggay VI</option>
                    <option>Baranggay VII</option>
                    <option>Baranggay VIII</option>
                    <option>Baranggay IX</option>
                    <option>Baranggay X</option>
                </FormSelect>
                {/* <FormInput label="Lot number" type="text" name="prod_name" id="name" placeholder="Lot number" />
                <FormInput label="Phase" type="text" name="prod_name" id="name" placeholder="Type phase" />
                <FormInput label="Sitio" type="text" name="prod_name" id="name" placeholder="Type sitio" />
                <FormInput label="City/Municipality" type="text" name="prod_name" id="name" placeholder="Type city" />
                <FormInput label="Blk number" type="text" name="prod_name" id="name" placeholder="Blk number" />
                <FormInput label="Purok" type="text" name="prod_name" id="name" placeholder="Type purok" />
                <FormInput label="Barangay" type="text" name="prod_name" id="name" placeholder="Type brgy" />
                <FormInput label="District/Province" type="text" name="prod_name" id="name" placeholder="Type district" /> */}
            </div>
            <h3 class="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Parent's Previous Address:</h3>
            <div class="grid gap-4 mb-4 sm:grid-cols-3 pb-2 border-b dark:border-gray-500">
                <FormSelect name="country" label="Country" id="country">
                    <option>Nigeria</option>
                    <option>Greece</option>
                    <option>USA</option>
                    <option>Philippines</option>
                    <option>Italy</option>
                    <option>Germany</option>
                    <option>Afganistan</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Bulgaria</option>
                    <option>Bahrain</option>
                    <option>Botswana</option>
                    <option>France</option>
                    <option>Great Britain</option>
                </FormSelect>
                <FormSelect name="region" label="Region" id="region">
                    <option>Region I</option>
                    <option>Region II</option>
                    <option>Region III</option>
                    <option>Region IV</option>
                    <option>Region V</option>
                    <option>Region VI</option>
                    <option>Region VII</option>
                    <option>Region VIII</option>
                    <option>Region IX</option>
                    <option>Region X</option>
                    <option>Region XI</option>
                    <option>Region XII</option>
                    <option>Region XIII</option>
                    <option>Region XIV</option>
                </FormSelect>
                <FormSelect name="province" label="Province" id="province">
                    <option>Zamboanga del norte</option>
                    <option>Zamboanga del sur</option>
                    <option>Zamboanga sibugay</option>
                    <option>Davao del norte</option>
                    <option>Davao del sur</option>
                    <option>Davao de oro(Compostela Valley)</option>
                    <option>Davao oriental</option>
                    <option>Davao Occidental</option>
                    <option>Cotabato</option>
                    <option>Sarangani</option>
                    <option>South Cotabato</option>
                </FormSelect>
                <FormSelect name="city" label="Municipality/City" id="city">
                    <option>Davao City</option>
                    <option>Panabo City</option>
                    <option>Tagum City</option>
                    <option>Samal Island</option>
                    <option>Digos City</option>
                    <option>Mati City</option>
                    <option>Talaingod</option>
                    <option>San Isidro</option>
                    <option>Carmen</option>
                    <option>Kapalong</option>
                    <option>New Corilla</option>
                    <option>Sto. Tomas</option>
                </FormSelect>
                <FormSelect name="brgy" label="Barangay" id="brgy">
                    <option>Baranggay I</option>
                    <option>Baranggay II</option>
                    <option>Baranggay III</option>
                    <option>Baranggay IV</option>
                    <option>Baranggay V</option>
                    <option>Baranggay VI</option>
                    <option>Baranggay VII</option>
                    <option>Baranggay VIII</option>
                    <option>Baranggay IX</option>
                    <option>Baranggay X</option>
                </FormSelect>
                {/* <FormInput label="Lot number" type="text" name="prod_name" id="name" placeholder="Lot number" />
                <FormInput label="Phase" type="text" name="prod_name" id="name" placeholder="Type phase" />
                <FormInput label="Sitio" type="text" name="prod_name" id="name" placeholder="Type sitio" />
                <FormInput label="City/Municipality" type="text" name="prod_name" id="name" placeholder="Type city" />
                <FormInput label="Blk number" type="text" name="prod_name" id="name" placeholder="Blk number" />
                <FormInput label="Purok" type="text" name="prod_name" id="name" placeholder="Type purok" />
                <FormInput label="Barangay" type="text" name="prod_name" id="name" placeholder="Type brgy" />
                <FormInput label="District/Province" type="text" name="prod_name" id="name" placeholder="Type district" /> */}
            </div>
            
            <h3 class="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Spouse's Present Address:</h3>
            <div class="grid gap-4 mb-4 sm:grid-cols-3 pb-2">
                <FormSelect name="country" label="Country" id="country">
                    <option>Nigeria</option>
                    <option>Greece</option>
                    <option>USA</option>
                    <option>Philippines</option>
                    <option>Italy</option>
                    <option>Germany</option>
                    <option>Afganistan</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Bulgaria</option>
                    <option>Bahrain</option>
                    <option>Botswana</option>
                    <option>France</option>
                    <option>Great Britain</option>
                </FormSelect>
                <FormSelect name="region" label="Region" id="region">
                    <option>Region I</option>
                    <option>Region II</option>
                    <option>Region III</option>
                    <option>Region IV</option>
                    <option>Region V</option>
                    <option>Region VI</option>
                    <option>Region VII</option>
                    <option>Region VIII</option>
                    <option>Region IX</option>
                    <option>Region X</option>
                    <option>Region XI</option>
                    <option>Region XII</option>
                    <option>Region XIII</option>
                    <option>Region XIV</option>
                </FormSelect>
                <FormSelect name="province" label="Province" id="province">
                    <option>Zamboanga del norte</option>
                    <option>Zamboanga del sur</option>
                    <option>Zamboanga sibugay</option>
                    <option>Davao del norte</option>
                    <option>Davao del sur</option>
                    <option>Davao de oro(Compostela Valley)</option>
                    <option>Davao oriental</option>
                    <option>Davao Occidental</option>
                    <option>Cotabato</option>
                    <option>Sarangani</option>
                    <option>South Cotabato</option>
                </FormSelect>
                <FormSelect name="city" label="Municipality/City" id="city">
                    <option>Davao City</option>
                    <option>Panabo City</option>
                    <option>Tagum City</option>
                    <option>Samal Island</option>
                    <option>Digos City</option>
                    <option>Mati City</option>
                    <option>Talaingod</option>
                    <option>San Isidro</option>
                    <option>Carmen</option>
                    <option>Kapalong</option>
                    <option>New Corilla</option>
                    <option>Sto. Tomas</option>
                </FormSelect>
                <FormSelect name="brgy" label="Barangay" id="brgy">
                    <option>Baranggay I</option>
                    <option>Baranggay II</option>
                    <option>Baranggay III</option>
                    <option>Baranggay IV</option>
                    <option>Baranggay V</option>
                    <option>Baranggay VI</option>
                    <option>Baranggay VII</option>
                    <option>Baranggay VIII</option>
                    <option>Baranggay IX</option>
                    <option>Baranggay X</option>
                </FormSelect>
                {/* <FormInput label="Lot number" type="text" name="prod_name" id="name" placeholder="Lot number" />
                <FormInput label="Phase" type="text" name="prod_name" id="name" placeholder="Type phase" />
                <FormInput label="Sitio" type="text" name="prod_name" id="name" placeholder="Type sitio" />
                <FormInput label="City/Municipality" type="text" name="prod_name" id="name" placeholder="Type city" />
                <FormInput label="Blk number" type="text" name="prod_name" id="name" placeholder="Blk number" />
                <FormInput label="Purok" type="text" name="prod_name" id="name" placeholder="Type purok" />
                <FormInput label="Barangay" type="text" name="prod_name" id="name" placeholder="Type brgy" />
                <FormInput label="District/Province" type="text" name="prod_name" id="name" placeholder="Type district" /> */}
            </div>
            <h3 class="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Spouse's Previous Address:</h3>
            <div class="grid gap-4 mb-4 sm:grid-cols-3 pb-2 border-b dark:border-gray-500">
                <FormSelect name="country" label="Country" id="country">
                    <option>Nigeria</option>
                    <option>Greece</option>
                    <option>USA</option>
                    <option>Philippines</option>
                    <option>Italy</option>
                    <option>Germany</option>
                    <option>Afganistan</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Bulgaria</option>
                    <option>Bahrain</option>
                    <option>Botswana</option>
                    <option>France</option>
                    <option>Great Britain</option>
                </FormSelect>
                <FormSelect name="region" label="Region" id="region">
                    <option>Region I</option>
                    <option>Region II</option>
                    <option>Region III</option>
                    <option>Region IV</option>
                    <option>Region V</option>
                    <option>Region VI</option>
                    <option>Region VII</option>
                    <option>Region VIII</option>
                    <option>Region IX</option>
                    <option>Region X</option>
                    <option>Region XI</option>
                    <option>Region XII</option>
                    <option>Region XIII</option>
                    <option>Region XIV</option>
                </FormSelect>
                <FormSelect name="province" label="Province" id="province">
                    <option>Zamboanga del norte</option>
                    <option>Zamboanga del sur</option>
                    <option>Zamboanga sibugay</option>
                    <option>Davao del norte</option>
                    <option>Davao del sur</option>
                    <option>Davao de oro(Compostela Valley)</option>
                    <option>Davao oriental</option>
                    <option>Davao Occidental</option>
                    <option>Cotabato</option>
                    <option>Sarangani</option>
                    <option>South Cotabato</option>
                </FormSelect>
                <FormSelect name="city" label="Municipality/City" id="city">
                    <option>Davao City</option>
                    <option>Panabo City</option>
                    <option>Tagum City</option>
                    <option>Samal Island</option>
                    <option>Digos City</option>
                    <option>Mati City</option>
                    <option>Talaingod</option>
                    <option>San Isidro</option>
                    <option>Carmen</option>
                    <option>Kapalong</option>
                    <option>New Corilla</option>
                    <option>Sto. Tomas</option>
                </FormSelect>
                <FormSelect name="brgy" label="Barangay" id="brgy">
                    <option>Baranggay I</option>
                    <option>Baranggay II</option>
                    <option>Baranggay III</option>
                    <option>Baranggay IV</option>
                    <option>Baranggay V</option>
                    <option>Baranggay VI</option>
                    <option>Baranggay VII</option>
                    <option>Baranggay VIII</option>
                    <option>Baranggay IX</option>
                    <option>Baranggay X</option>
                </FormSelect>
                {/* <FormInput label="Lot number" type="text" name="prod_name" id="name" placeholder="Lot number" />
                <FormInput label="Phase" type="text" name="prod_name" id="name" placeholder="Type phase" />
                <FormInput label="Sitio" type="text" name="prod_name" id="name" placeholder="Type sitio" />
                <FormInput label="City/Municipality" type="text" name="prod_name" id="name" placeholder="Type city" />
                <FormInput label="Blk number" type="text" name="prod_name" id="name" placeholder="Blk number" />
                <FormInput label="Purok" type="text" name="prod_name" id="name" placeholder="Type purok" />
                <FormInput label="Barangay" type="text" name="prod_name" id="name" placeholder="Type brgy" />
                <FormInput label="District/Province" type="text" name="prod_name" id="name" placeholder="Type district" /> */}
            </div>

            <h3 class="text-lg font-semibold text-gray-900 pb-3 dark:text-white">Personal References</h3>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">(Relatives or friends not living with you)</label>
            <div class="grid gap-4 mb-4 sm:grid-cols-1 pb-2 border-b dark:border-gray-500">
                <table class="w-full">
                    <FormTHead>
                        <FormTH label="Name" />
                        <FormTH label="Address" />
                        <FormTH label="Contact number" />
                    </FormTHead>
                    <FormTBody>
                        <FormTD placeholder="Full name here" />
                        <FormTD placeholder="Address here" />
                        <FormTD placeholder="Cellphone number" />
                    </FormTBody>
                </table>
                <div class="grid pt-4 sm:cols-span-1">
                    <BttnwithIcon text="Add row">
                        <Plus />
                    </BttnwithIcon>
                </div>
            </div>
        </>
    );
}